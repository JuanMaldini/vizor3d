/**
 * Utilidades simples y modulares para precargar imágenes de panoramas.
 *
 * Objetivos de diseño:
 *  - Código legible y comentado
 *  - API pequeña y estable (fácil de escalar luego)
 *  - Evitar recargas duplicadas (caché en memoria)
 *  - Permitir precarga total o sólo de la primera imagen (warm start)
 */

import type { PannellumSetup } from '../types/PanoramasConfig/panellumConfig_SampleAI'

/** Resultado individual de precarga */
export interface PreloadResult {
  url: string
  ok: boolean
  error?: unknown
}

/** Caché de promesas para no disparar múltiples descargas de la misma imagen */
const imagePromiseCache = new Map<string, Promise<PreloadResult>>()

/** Extrae todas las rutas únicas de un setup de panoramas */
export function collectPanoramaImages(setup: PannellumSetup): string[] {
  const urls = new Set<string>()
  if (setup.first?.imageSource) urls.add(setup.first.imageSource)
  if (setup.scenes) {
    for (const scene of Object.values(setup.scenes)) {
      if (scene?.imageSource) urls.add(scene.imageSource)
    }
  }
  return Array.from(urls)
}

/**
 * Precarga una imagen creando un objeto Image y esperando onload / onerror.
 * Devuelve una promesa cacheada para cada URL.
 */
export function preloadSingleImage(url: string): Promise<PreloadResult> {
  if (imagePromiseCache.has(url)) return imagePromiseCache.get(url)!

  const promise = new Promise<PreloadResult>(resolve => {
    const img = new Image()
    img.onload = () => resolve({ url, ok: true })
    img.onerror = (e) => resolve({ url, ok: false, error: e })
    img.src = url
  })

  imagePromiseCache.set(url, promise)
  return promise
}

export interface PreloadImagesOptions {
  concurrent?: number          // Máximo de descargas simultáneas (default 4)
  onProgress?: (data: { done: number; total: number; last: PreloadResult }) => void
  injectPrefetchLinks?: boolean // Añade <link rel="prefetch"> al head (default true)
}

/**
 * Precarga un array de imágenes con un límite de concurrencia sencillo.
 */
export async function preloadImages(urls: string[], options: PreloadImagesOptions = {}) {
  const {
    concurrent = 4,
    onProgress,
    injectPrefetchLinks = true,
  } = options

  const queue = [...urls]
  const total = queue.length
  let done = 0

  const results: PreloadResult[] = []

  async function worker() {
    while (queue.length) {
      const url = queue.shift()!
      const res = await preloadSingleImage(url)
      results.push(res)
      done++

      // (Opcional) insertar prefetch para hint al navegador
      if (injectPrefetchLinks && res.ok && typeof document !== 'undefined') {
        if (!document.querySelector(`link[data-prefetch='${url}']`)) {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.as = 'image'
          link.href = url
          link.setAttribute('data-prefetch', url)
          document.head.appendChild(link)
        }
      }

      onProgress?.({ done, total, last: res })
    }
  }

  // Arranca N workers
  const workers: Promise<void>[] = []
  for (let i = 0; i < Math.min(concurrent, total); i++) workers.push(worker())
  await Promise.all(workers)
  return results
}

export interface WarmStartOptions extends Omit<PreloadImagesOptions, 'onProgress'> {
  /** Progreso global (incluye la primera imagen) */
  onProgress?: (data: { done: number; total: number; last: PreloadResult }) => void
  /** Si true, sólo garantiza precarga de la primera imagen (resto en background) */
  mode?: 'first' | 'all'
}

/**
 * Prepara la experiencia de panoramas:
 *  - mode 'first': precarga sólo la primera imagen y comienza precarga del resto en background
 *  - mode 'all': espera a que todas estén cargadas antes de resolver
 */
export async function warmStartPanorama(setup: PannellumSetup, opts: WarmStartOptions = {}) {
  const { mode = 'first', onProgress, ...rest } = opts
  const urls = collectPanoramaImages(setup)
  if (urls.length === 0) return { first: undefined, all: [] as PreloadResult[] }

  // Siempre precargamos la primera como paso inicial
  const [firstUrl, ...others] = urls
  const firstPromise = preloadSingleImage(firstUrl)
  const firstResult = await firstPromise.then(r => {
    onProgress?.({ done: 1, total: urls.length, last: r })
    return r
  })

  if (mode === 'first') {
    // Lanzamos resto en background (no esperamos)
    if (others.length) {
      // Fire & forget
      preloadImages(others, { ...rest, onProgress: (d) => onProgress?.({ ...d, done: d.done + 1 }) })
    }
    return { first: firstResult, all: [firstResult] }
  }

  // mode === 'all' -> cargar también las restantes
  const restResults = await preloadImages(others, { ...rest, onProgress: (d) => onProgress?.({ ...d, done: d.done + 1 }) })
  return { first: firstResult, all: [firstResult, ...restResults] }
}

/** Limpia la caché de promesas (por ejemplo al hacer logout o liberar memoria) */
export function clearPreloadedImagesCache() {
  imagePromiseCache.clear()
}

/** Devuelve el número de imágenes con promesa cacheada */
export function getPreloadedCount() {
  return imagePromiseCache.size
}
