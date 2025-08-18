import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import '../../../styles/Projects.css'


type Props = {}

function simpleAR({}: Props) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/build/Build/build.loader.js",
    dataUrl: "/build/Build/build.data",
    frameworkUrl: "/build/Build/build.framework.js",
    codeUrl: "/build/Build/build.wasm",
    companyName: "VIZOR3D",
    productName: "ARSample",
    productVersion: "1.0.0",
  });

  return (
    <div className="projects2-main">
        <section className="projects2-hero">
          <h1 className="projects2-title">Image base tracking</h1>
          <p className="projects2-desc">Use your mobile device, point your camera at the image provided.</p>
          <a className="btn btn-secondary" onClick={() => window.location.href = '/SimpleAR_location'}>Place here</a>
        </section>
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