/// <reference types="vite/client" />
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        style?: React.CSSProperties;
        'touch-action'?: string;
        'shadow-intensity'?: string | number;
      };
    }
  }
}