/* eslint-disable @typescript-eslint/no-namespace */
import type { ModelViewerElement } from '@google/model-viewer';
import type React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewer;
    }
  }
}

export interface ModelViewer extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'ref'> {
  /**
   * The URL to the 3D model. Only glTF/GLB models are supported.
   */
  src?: string;
  /**
   * Configures the model with custom text that will be used to describe the model to viewers who use a screen reader.
   */
  alt?: string;
  /**
   * Displays an image instead of the model while loading.
   */
  poster?: string;
  /**
   * Preloading strategy: 'auto' | 'lazy' | 'eager'.
   */
  loading?: 'eager' | 'lazy' | 'auto';
  /**
   * When to reveal: 'auto' | 'interaction' | 'manual'.
   */
  reveal?: 'auto' | 'interaction' | 'manual';
  /**
   * Include credentials in fetch.
   */
  'with-credentials'?: boolean;
  /**
   * Enable AR experiences.
   */
  ar?: boolean;
  /**
   * AR modes to enable.
   */
  'ar-modes'?:
    | 'webxr'
    | 'scene-viewer'
    | 'quick-look'
    | 'webxr scene-viewer'
    | 'webxr quick-look'
    | 'scene-viewer quick-look'
    | 'webxr scene-viewer quick-look';
  /**
   * AR scale behavior: 'auto' | 'fixed'.
   */
  'ar-scale'?: 'auto' | 'fixed';
  /**
   * AR placement: 'floor' | 'wall'.
   */
  'ar-placement'?: 'floor' | 'wall';
  /**
   * iOS Quick Look src URL.
   */
  'ios-src'?: string;
  /**
   * Enable XR environment lighting estimation.
   */
  'xr-environment'?: boolean;
  /**
   * Enable controls via mouse/touch.
   */
  'camera-controls'?: boolean;
  /**
   * Disable panning interactions.
   */
  'disable-pan'?: boolean;
  /**
   * Disable tap-to-recenter behavior.
   */
  'disable-tap'?: boolean;
  /**
   * Touch action: 'pan-x' | 'pan-y' | 'none'.
   */
  'touch-action'?: 'pan-x' | 'pan-y' | 'none';
  /**
   * Disable zoom controls.
   */
  'disable-zoom'?: boolean;
  /**
   * Orbit speed.
   */
  'orbit-speed'?: number;
  /**
   * Enable auto-rotation.
   */
  'auto-rotate'?: boolean;
  /**
   * Delay before auto-rotate (ms).
   */
  'auto-rotate-delay'?: number;
  /**
   * Rotation speed per second.
   */
  'rotation-per-second'?: string;
  /**
   * Interaction prompt: 'auto' | 'none'.
   */
  'interaction-prompt'?: 'auto' | 'none';
  /**
   * Interaction prompt style: 'basic' | 'wiggle'.
   */
  'interaction-prompt-style'?: 'basic' | 'wiggle';
  /**
   * Interaction prompt threshold (ms).
   */
  'interaction-prompt-threshold'?: number;
  /**
   * Camera orbit positioning.
   */
  'camera-orbit'?: string;
  /**
   * Camera target positioning.
   */
  'camera-target'?: string;
  /**
   * Field of view.
   */
  'field-of-view'?: string;
  /**
   * Max camera orbit.
   */
  'max-camera-orbit'?: string;
  /**
   * Min camera orbit.
   */
  'min-camera-orbit'?: string;
  /**
   * Max field of view.
   */
  'max-field-of-view'?: string;
  /**
   * Min field of view.
   */
  'min-field-of-view'?: string;
  /**
   * Interpolation decay (ms).
   */
  'interpolation-decay'?: number;
  /**
   * Skybox image URL.
   */
  'skybox-image'?: string;
  /**
   * Skybox height.
   */
  'skybox-height'?: string;
  /**
   * Environment image.
   */
  'environment-image'?: 'neutral' | 'legacy' | string;
  /**
   * Exposure adjustment.
   */
  exposure?: number;
  /**
   * Tone mapping algorithm.
   */
  'tone-mapping'?: 'aces' | 'agx' | 'commerce';
  /**
   * Shadow intensity.
   */
  'shadow-intensity'?: number;
  /**
   * Shadow softness.
   */
  'shadow-softness'?: number;
  /**
   * Animation name.
   */
  'animation-name'?: string;
  /**
   * Animation crossfade duration (ms).
   */
  'animation-crossfade-duration'?: number;
  /**
   * Autoplay animation.
   */
  autoplay?: boolean;
  /**
   * Variant name.
   */
  'variant-name'?: string;
  /**
   * Model orientation.
   */
  orientation?: string;
  /**
   * Model scale.
   */
  scale?: string;
  /**
   * Minimum render scale factor.
   */
  minimumRenderScale?: number;
  /**
   * Model cache size.
   */
  modelCacheSize?: number;
  /**
   * Power preference.
   */
  powerPreference?: 'default' | 'high-performance' | 'low-power';
  /**
   * CSS id attribute.
   */
  id?: string;
  /**
   * CSS styles.
   */
  style?: React.CSSProperties;
  /**
   * Ref to the underlying ModelViewerElement.
   */
  ref?: React.Ref<ModelViewerElement>;
}

/** Supported image MIME types for poster attribute. */
export type ImageType = 'image/png' | 'image/jpeg' | 'image/webp';
