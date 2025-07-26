import React from 'react';
import '@google/model-viewer';
import type { ModelViewer as ModelViewerProps } from '../types/model-viewer';
import type { ModelViewerElement } from '@google/model-viewer';

/**
 * React wrapper for <model-viewer> web component with forwarded ref.
 */
const ModelViewer = React.forwardRef<ModelViewerElement, any>(
  ({ children, autoRotate, cameraControls, environmentImage, backgroundColor, ...rest }, ref) => {
    // Map camelCase props to kebab-case attributes for the web component
    const attrs: any = { ref, ...rest };
    if (autoRotate !== undefined) attrs['auto-rotate'] = autoRotate;
    if (cameraControls !== undefined) attrs['camera-controls'] = cameraControls;
    if (environmentImage !== undefined) attrs['environment-image'] = environmentImage;
    if (backgroundColor !== undefined) attrs['background-color'] = backgroundColor;
    // Render the web component via React.createElement
    return React.createElement('model-viewer', attrs, children);
  }
);
ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;



