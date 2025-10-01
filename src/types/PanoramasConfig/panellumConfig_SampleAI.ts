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
export const panellumConfig_SampleAI: PannellumSetup = {
  id: 'viewer-1',
  firstSceneId: 'Sampleai_01',
  defaults: {
    autoLoad: true,
    showZoomCtrl: false,
    hfov: 110,
    sceneFadeDuration: 1000,
  },
  first: {
    imageSource: '/images/projects/Sampleai/Sample_AI09_01.jpg',
    config: {
      title: '',
      type: 'equirectangular',
      pitch: -3,
      yaw: 117,
      hotSpots: [
        { sceneId: 'Sampleai_02', type: 'scene', pitch: -39.3, yaw: 76, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_03', type: 'scene', pitch: -39.5, yaw: -79.3, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_04', type: 'scene', pitch: -22.5, yaw: -83.7, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_05', type: 'scene', pitch: -15.54410302288399, yaw: -137.44656566250043, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_06', type: 'scene', pitch: -36.71850384146028, yaw: -123.6022459805157, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_07', type: 'scene', pitch: -19.12233911507805, yaw: -169.84819835377016, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_08', type: 'scene', pitch: -16.182970890091525, yaw: 157.45360506549025, targetYaw: 'same', targetPitch: 'same' },
        { sceneId: 'Sampleai_09', type: 'scene', pitch: -17.201298350399053, yaw: 131.86112603426764, targetYaw: 'same', targetPitch: 'same' },
      ],
    },
  },
  scenes: {
    Sampleai_02: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_02.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -39.85, yaw: -78.85, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -22.5, yaw: -84.7, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -14.83, yaw: -86.13, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -9.8487250459484, yaw: -127.16599392678768, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -21.694775034377916, yaw: -108.21319395489375, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -17.249935247456012, yaw: -148.00223758910363, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -21.483661654666783, yaw: 178.4830489771014, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -33.211903121259084, yaw: 168.61775631221477, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_03: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_03.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -39.85, yaw: 78.85, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -20.5, yaw: 82.8, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -40, yaw: -83, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -19.02507533822296, yaw: -154.76473301441618, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -47.8310697985946, yaw: 169.01358570131745, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -16.912169045298757, yaw: 167.201410333578, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -16.091680957318797, yaw: 137.54499892899565, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -12.091947020653173, yaw: 121.96174179271367, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_04: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_04.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -22.26, yaw: 83.34, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -14.98, yaw: 84.90, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -39, yaw: 78.2, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -20.733420533908816, yaw: -178.94586609971043, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -28.679708683621662, yaw: 120.70057724831881, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -16.21390483985229, yaw: 147.6725101755357, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -12.010246671985387, yaw: 123.76136172388765, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -8.095310457991827, yaw: 112.36683727588053, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_05: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_05.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -17.36874125533316, yaw: 40.28816438988322, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -13.18578139862265, yaw: 52.53304877938946, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -20.124284707485618, yaw: 20.018597248567815, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -21.183348165899343, yaw: -6.427350792947299, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -29.522495115816653, yaw: 40.745006906348195, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -33.3487823908823, yaw: 104.50636072608798, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -16.54278648905028, yaw: 96.86297950518878, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -14.189714973171053, yaw: 79.9568347627397, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_06: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_06.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -31.163373949401862, yaw: 40.10544356810522, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -20.28979049413677, yaw: 59.77693379377578, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -38.274376766243684, yaw: -3.9811814423990715, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -28.222816532607172, yaw: -48.479075915685065, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -23.691310907868168, yaw: -139.3652455733243, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -29.003184150971585, yaw: 161.6564590249756, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -20.079889909033017, yaw: 123.59358293242587, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -15.661701680967486, yaw: 101.38726200220353, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_07: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_07.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -18.447826580454247, yaw: 10.78535391084768, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -15.318869462125221, yaw: 30.45076194981643, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -18.343435907245166, yaw: -11.981568169786621, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -21.5103366181141, yaw: -31.77007008893558, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -28.05904379980902, yaw: -90.0166369015954, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -27.80749980852305, yaw: -16.114712877435473, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -29.431855736905604, yaw: 85.9337419973798, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -22.142183292534014, yaw: 64.02675077852737, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_08: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_08.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -12.740081481550195, yaw: -19.95949433094716, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -18.855971290316656, yaw: 2.0767381860122773, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -14.690884797372796, yaw: -37.78479291226232, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -11.98857033393422, yaw: -50.67139990471715, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -15.208363763527167, yaw: -90.5242565629528, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -15.897946138116595, yaw: -51.70541966413192, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -30.500596596804016, yaw: -92.6543497506861, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_09', type: 'scene', pitch: -42.64444420404129, yaw: 20.14232144595964, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
    Sampleai_09: {
      imageSource: '/images/projects/Sampleai/Sample_AI09_09.jpg',
      config: {
        title: '',
        type: 'equirectangular',
        hotSpots: [
          { sceneId: 'Sampleai_01', type: 'scene', pitch: -17.620729859395748, yaw: -37.58376719775619, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_02', type: 'scene', pitch: -27.636903609666927, yaw: -7.5519614412622795, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_03', type: 'scene', pitch: -15.947504283700706, yaw: -55.468526191535, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_04', type: 'scene', pitch: -12.533678648129888, yaw: -64.2978640805966, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_05', type: 'scene', pitch: -12.986830038576985, yaw: -106.68635419388208, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_06', type: 'scene', pitch: -15.515865409406528, yaw: -73.06478792983197, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_07', type: 'scene', pitch: -22.445093176570886, yaw: -119.69140424465037, targetYaw: 'same', targetPitch: 'same' },
          { sceneId: 'Sampleai_08', type: 'scene', pitch: -39.85751604757657, yaw: -162.5179985376181, targetYaw: 'same', targetPitch: 'same' },
        ],
      },
    },
  },
}
