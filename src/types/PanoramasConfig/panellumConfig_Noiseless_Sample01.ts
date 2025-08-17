import type { PannellumConfig } from 'react-pannellum'

export type SceneDef = {
  imageSource: string
  config: PannellumConfig & {
    hotSpots?: Array<any>
  }
}

export type PannellumSetup = {
  id: string
  firstSceneId: string
  first: SceneDef
  scenes?: Record<string, SceneDef>
  defaults?: Partial<PannellumConfig> & { sceneFadeDuration?: number }
}

// Config rebuilt from provided TSX (all scenes + defaults)
export const panellumConfig_Noiseless_Sample01: PannellumSetup = {
  id: 'viewer-1',
  firstSceneId: 'Sampleai_01',
  defaults: {
    autoLoad: true,
    showZoomCtrl: false,
    hfov: 100,
    sceneFadeDuration: 1000,
    autoRotate: -2,
  },
  first: {
    imageSource: '/images/projects/Noiseless/1.jpg',
    config: {
      title: '',
      type: 'equirectangular',
      pitch: -1.1195383276232724,
      yaw: 43.568985506613785,
    },
  },
}
