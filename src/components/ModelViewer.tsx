import React from 'react';
import '@google/model-viewer';
import type { ModelViewerElement } from '@google/model-viewer';

const ModelViewer = React.forwardRef<ModelViewerElement, any>(
  ({ children, autoRotate, cameraControls, environmentImage, backgroundColor, ...rest }, ref) => {
    const attrs: any = { ref, ...rest };
    if (autoRotate !== undefined) attrs['auto-rotate'] = autoRotate;
    if (cameraControls !== undefined) attrs['camera-controls'] = cameraControls;
    if (environmentImage !== undefined) attrs['environment-image'] = environmentImage;
    if (backgroundColor !== undefined) attrs['background-color'] = backgroundColor;
    return React.createElement('model-viewer', attrs, children);
  }
);
ModelViewer.displayName = 'ModelViewer';

export default ModelViewer;



