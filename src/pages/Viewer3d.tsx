import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '@google/model-viewer';

const Viewer3d: React.FC = () => {
  return (
    <div>
        <Navbar />

        <Footer />
    </div>
  );
};

export default Viewer3d;