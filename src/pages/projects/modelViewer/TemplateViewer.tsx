import ModelViewer from '../../../components/ModelViewer';

function TemplateViewer() {
  return (
        <ModelViewer
          src={''} // string: '/models/model.glb'
          alt={''} // string: 'A 3D model'
          poster={''} // string: '/images/loading.png'
          loading={undefined} // 'eager' | 'lazy' | 'auto'
          reveal={undefined} // 'auto' | 'interaction' | 'manual'
          with-credentials={undefined} // boolean: true
          ar={undefined} // boolean: true
          ar-modes={undefined} // string: 'webxr scene-viewer quick-look'
          ar-scale={undefined} // 'auto' | 'fixed'
          ar-placement={undefined} // 'floor' | 'wall'
          ios-src={''} // string: '/models/model.usdz'
          xr-environment={undefined} // boolean: true
          camera-controls={undefined} // boolean: true
          disable-pan={undefined} // boolean: true
          disable-tap={undefined} // boolean: true
          touch-action={undefined} // 'pan-x' | 'pan-y' | 'none'
          disable-zoom={undefined} // boolean: true
          orbit-speed={undefined} // number: 1.5
          auto-rotate={undefined} // boolean: true
          auto-rotate-delay={undefined} // number: 1000
          rotation-per-second={''} // string: '30deg'
          interaction-prompt={undefined} // 'auto' | 'none'
          interaction-prompt-style={undefined} // 'basic' | 'wiggle'
          interaction-prompt-threshold={undefined} // number: 3000
          camera-orbit={''} // string: '45deg 55deg 2.5m'
          camera-target={''} // string: '0m 1m 0m'
          field-of-view={''} // string: '45deg'
          max-camera-orbit={''} // string: 'auto'
          min-camera-orbit={''} // string: 'auto'
          max-field-of-view={''} // string: '60deg'
          min-field-of-view={''} // string: '30deg'
          interpolation-decay={undefined} // number: 100
          skybox-image={''} // string: '/images/skybox.hdr'
          skybox-height={''} // string: '1.5m'
          environment-image={undefined} // string: '/images/env.hdr' | 'neutral'
          exposure={undefined} // number: 1.0
          tone-mapping={undefined} // 'aces' | 'agx' | 'commerce'
          shadow-intensity={undefined} // number: 0.5
          shadow-softness={undefined} // number: 0.5
          animation-name={''} // string: 'Walk'
          animation-crossfade-duration={undefined} // number: 500
          autoplay={undefined} // boolean: true
          variant-name={''} // string: 'RedMaterial'
          orientation={''} // string: '0 1 0 90deg'
          scale={''} // string: '1 1 1'
          minimumRenderScale={undefined} // number: 0.25
          modelCacheSize={undefined} // number: 10
          powerPreference={undefined} // 'default' | 'high-performance' | 'low-power'
          id={''} // string: 'viewer1'
          style={undefined} // React.CSSProperties: { width: '100%' }
          ref={undefined} // React.Ref<ModelViewerElement>
        />
  );
}

export default TemplateViewer;