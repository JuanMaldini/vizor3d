export {};
interface PannellumViewer {
    destroy: () => void;
    getPitch: () => number;
    getYaw: () => number;
}
declare global {
  interface Window {
    pannellum: any;
  }
}