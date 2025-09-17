import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./types/reportWebVitals";

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  void (async () => {
    try {
      const { serviceWorker } = navigator;
      let registrations: ServiceWorkerRegistration[] = [];
      if (typeof serviceWorker.getRegistrations === "function") {
        registrations = [...(await serviceWorker.getRegistrations())];
      } else if (typeof serviceWorker.getRegistration === "function") {
        const registration = await serviceWorker.getRegistration("/");
        if (registration) {
          registrations = [registration];
        }
      }
      await Promise.all(
        registrations.map(async (registration) => {
          try {
            await registration.unregister();
          } catch (error) {
            console.warn("Failed to unregister service worker", error);
          }
        }),
      );
    } catch (error) {
      console.warn("Failed to retrieve service worker registrations", error);
    }

    if (typeof caches !== "undefined") {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      } catch (error) {
        console.warn("Failed to clear caches", error);
      }
    }
  })();
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
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
