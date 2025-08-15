import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactPannellum, { addScene } from 'react-pannellum'
import type { PannellumSetup } from '../../../types/PanoramasConfig/panellumConfig_SampleAI'
import { warmStartPanorama, collectPanoramaImages } from '../../../utils/panoramaPreload'

/**
 * Componente de visor que:
 *  - Precarga la primera imagen (warm start) y muestra un overlay de progreso
 *  - Continúa precargando en background el resto de escenas
 *  - Cuando el visor inicial dispara onPanoramaLoaded => listo para añadir escenas adicionales
 */
export default function PanellumSample({ setup }: { setup: PannellumSetup }) {
	const { id, firstSceneId, first, scenes, defaults } = setup

	// Estado de precarga
	const [loading, setLoading] = useState(true)        // true hasta que la primera imagen esté disponible
	const [progress, setProgress] = useState({ done: 0, total: collectPanoramaImages(setup).length })
	const [viewerReady, setViewerReady] = useState(false) // true cuando ReactPannellum monta y dispara onPanoramaLoaded

	// Config base de la primera escena (merge de defaults + config específica)
	const firstConfig = useMemo(() => ({ ...(defaults || {}), ...(first?.config || {}) }), [defaults, first])

	// Warm start: precarga de la primera imagen y cola del resto en background
	useEffect(() => {
		let cancelled = false
		setProgress(p => ({ ...p, total: collectPanoramaImages(setup).length }))

		warmStartPanorama(setup, {
			mode: 'first',               // Cambiar a 'all' si se prefiere bloquear hasta que todas estén
			concurrent: 4,
			onProgress: ({ done, total }) => {
				if (!cancelled) setProgress({ done, total })
			},
		}).then(() => {
			if (!cancelled) setLoading(false)
		})
		return () => { cancelled = true }
	}, [setup])

	// Cuando el visor base está listo añadimos las demás escenas (sus imágenes ya estarán en caché pronto)
	useEffect(() => {
		if (!viewerReady) return
		if (!scenes) return

		Object.entries(scenes).forEach(([sceneId, def]) => {
			if (!def || sceneId === firstSceneId) return
			const cfg = { ...(defaults || {}), ...(def.config || {}) }
			addScene(sceneId, { ...cfg, imageSource: def.imageSource })
		})
	}, [viewerReady, scenes, defaults, firstSceneId])

	const handlePanoramaLoaded = useCallback(() => {
		// El componente inicial ya montó la primera escena
		setViewerReady(true)
	}, [])

	const firstImgSrc = first?.imageSource

	return (
		<>
			{/* Overlay de carga simple y desacoplado */}
			{loading && (
				<div style={{
					position: 'fixed', inset: 0, background: '#000',
					display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
					color: '#fff', zIndex: 9999, gap: 12
				}}>
					<div style={{ fontSize: 14, letterSpacing: 0.5 }}>Cargando panorama…</div>
					<div style={{ fontSize: 12 }}>{progress.done}/{progress.total}</div>
					<div style={{ width: 240, height: 6, background: '#222', borderRadius: 4, overflow: 'hidden' }}>
						<div style={{
							width: `${(progress.done / Math.max(progress.total, 1)) * 100}%`,
							height: '100%', background: '#4caf50', transition: 'width .35s'
						}} />
					</div>
				</div>
			)}

			<ReactPannellum
				id={id}
				sceneId={firstSceneId}
				imageSource={firstImgSrc}
				config={firstConfig}
				style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', background: '#000' }}
				onPanoramaLoaded={handlePanoramaLoaded}
			/>
		</>
	)
}
