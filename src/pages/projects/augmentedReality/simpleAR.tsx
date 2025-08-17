import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

type Props = {}

function simpleAR({}: Props) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "build/ARONE.loader.js",
    dataUrl: "build/ARONE.data",
    frameworkUrl: "build/ARONE.framework.js",
    codeUrl: "build/ARONE.wasm",
  });

  return (
    <div style={{ width: '100%', maxWidth: 100, margin: '0 auto' }}>
        <div>Image base tracking</div>
        <div>Use your mobile device, point your camera at the image provided.</div>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/Location'}>PLACE</button>
      {!isLoaded && (
        <p style={{ textAlign: 'center', margin: '12px 0' }}>
          Loading… {Math.round((loadingProgression ?? 0) * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ width: '100%', aspectRatio: '16 / 9', background: '#000',visibility: isLoaded ? "visible" : "hidden" }}
      />
    </div>
  )
}

export default simpleAR