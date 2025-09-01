import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './types/reportWebVitals';

// SPA deep-link restore: if 404.html redirected here with ?p=encodedPath,
// replace the URL before React Router initializes so it loads the right route.
(() => {
  try {
    const url = new URL(window.location.href);
    const encoded = url.searchParams.get('p');
    if (encoded && window.location.pathname === '/') {
      const target = decodeURIComponent(encoded);
      window.history.replaceState(null, '', target);
    }
  } catch {}
})();
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
