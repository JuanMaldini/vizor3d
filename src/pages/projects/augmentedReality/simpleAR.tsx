import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

type Props = {}

// Nota: coloca tu build de Unity WebGL dentro de `public/unity/` y
// ajusta los nombres/paths si difieren de los predeterminados.
// Con Vite, los assets en `public` se sirven desde la raíz `/`.
function simpleAR({}: Props) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/unity/myunityapp.loader.js',
    dataUrl: '/unity/myunityapp.data',
    frameworkUrl: '/unity/myunityapp.framework.js',
    codeUrl: '/unity/myunityapp.wasm',
  })

  return (
    <div style={{ width: '100%', maxWidth: 1400, margin: '0 auto' }}>
        <div>Image base tracking</div>
        <div>Use your mobile device, point your camera at the image provided.</div>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/Location'}>PLACE</button>
      {!isLoaded && (
        <p style={{ textAlign: 'center', margin: '12px 0' }}>
          Cargando… {Math.round((loadingProgression ?? 0) * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ width: '100%', aspectRatio: '16 / 9', background: '#000' }}
      />
    </div>
  )
}

export default simpleAR