import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './types/reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root')!);
const AppTree = (
  <>
    <App />
  </>
);

// Disable StrictMode in development to avoid double mount/unmount
// that breaks some third-party libs (e.g., react-pannellum viewers).
if (import.meta.env.DEV) {
  root.render(AppTree);
} else {
  root.render(<React.StrictMode>{AppTree}</React.StrictMode>);
}
reportWebVitals();
