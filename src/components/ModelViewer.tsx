import React from 'react';
import '@google/model-viewer';
import type { ModelViewerElement } from '@google/model-viewer';

type MVProps = React.ComponentPropsWithoutRef<'model-viewer'> & {
  autoRotate?: boolean;
  cameraControls?: boolean;
  environmentImage?: string;
  backgroundColor?: string;
};

const ModelViewer = React.forwardRef<ModelViewerElement, MVProps>(
  ({ children, autoRotate, cameraControls, environmentImage, backgroundColor, ...rest }, ref) => {
    const attrs: Record<string, any> = { ref, ...rest };
    if (autoRotate) attrs['auto-rotate'] = '';
    if (cameraControls) attrs['camera-controls'] = '';
    if (environmentImage) attrs['environment-image'] = environmentImage;
    if (backgroundColor) attrs['background-color'] = backgroundColor;
    return React.createElement('model-viewer', attrs, children);
  }
);
ModelViewer.displayName = 'ModelViewer';

export default React.memo(ModelViewer);



