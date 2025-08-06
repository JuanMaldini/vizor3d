
export {};

// Basic interface for the Pannellum viewer instance to access its methods like destroy()
interface PannellumViewer {
    destroy: () => void;
    getPitch: () => number;
    getYaw: () => number;
}

// Augment the global Window interface to include the pannellum object
declare global {
  interface Window {
    pannellum: {
      viewer: (container: HTMLElement | string, config: any) => PannellumViewer;
    };
  }
}
