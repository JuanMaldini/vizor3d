declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      autoRotate?: boolean;
      cameraControls?: boolean;
      touchAction?: string;
      shadowIntensity?: string | number;
      // ...otros atributos
    };
  }
}
