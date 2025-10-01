export {};

// Pannellum setup configuration for ProjectCard component
export interface PannellumSetup {
  id: string;
  firstSceneId: string;
  first: {
    imageSource: string;
    config?: any;
  };
  scenes?: Record<string, any>;
}

declare global {
  interface Window {
    pannellum: any;
  }
}
