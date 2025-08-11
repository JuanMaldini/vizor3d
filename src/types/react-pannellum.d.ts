declare module 'react-pannellum' {
  import { CSSProperties } from 'react'
  export interface PannellumConfig {
    autoLoad?: boolean
    autoRotate?: number
    showFullscreenCtrl?: boolean
    showZoomCtrl?: boolean
    yaw?: number
    pitch?: number
    hfov?: number
    [key: string]: any
  }

  export interface ReactPannellumProps {
    id: string
    sceneId: string
    imageSource?: string
    type?: 'equirectangular' | 'cubemap' | 'multires'
    config?: PannellumConfig
    style?: CSSProperties
    className?: string
    onPanoramaLoaded?: () => void
  }

  export default function ReactPannellum(props: ReactPannellumProps): JSX.Element

  // A selection of commonly used API helpers; mark the rest as any to keep it lightweight
  export function isLoaded(): boolean
  export function getConfig(): any
  export function getYaw(): number
  export function setYaw(
    yaw: number,
    animated?: boolean | number,
    callback?: () => void,
    callbackArgs?: Record<string, any>
  ): void
  export function getPitch(): number
  export function setPitch(
    pitch: number,
    animated?: boolean | number,
    callback?: () => void,
    callbackArgs?: Record<string, any>
  ): void
  export function getHfov(): number
  export function setHfov(
    hfov: number,
    animated?: boolean | number,
    callback?: () => void,
    callbackArgs?: Record<string, any>
  ): void
  export function lookAt(
    pitch?: number,
    yaw?: number,
    hfov?: number,
    animated?: boolean | number,
    callback?: () => void,
    callbackArgs?: Record<string, any>
  ): void

  // Scene and hotspot management
  export function addScene(
    sceneId: string,
    config: PannellumConfig & {
      title?: string
      description?: string
      author?: string
      imageSource?: string
      type?: 'equirectangular' | 'cubemap' | 'multires'
      hotSpots?: any[]
    },
    callback?: () => void
  ): void

  export function addHotSpot(
    hs: {
      pitch: number
      yaw: number
      type?: 'scene' | 'info'
      text?: string
      URL?: string
      sceneId?: string
      targetPitch?: number | 'same'
      targetYaw?: number | 'same' | 'sameAzimuth'
      targetHfov?: number
      id?: string
      cssClass?: string
      createTooltipFunc?: (hotSpotDiv: HTMLElement, args?: Record<string, any>) => void
      createTooltipArgs?: Record<string, any>
      clickHandlerFunc?: (event: MouseEvent, args?: Record<string, any>) => void
      clickHandlerArgs?: Record<string, any>
    },
    sceneId?: string
  ): void

  export function loadScene(
    sceneId: string,
    pitch?: number,
    yaw?: number,
    hfov?: number,
    fadeDone?: boolean
  ): void
}
