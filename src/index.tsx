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
        })
      );
    } catch (error) {
      console.warn("Failed to retrieve service worker registrations", error);
    }

    if (typeof caches !== "undefined") {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      } catch (error) {
        console.warn("Failed to clear caches", error);
      }
    }

    // Ensure the first load after cleaning SW/caches fetches fresh assets
    try {
      const key = "__reloaded_after_sw_cleanup__";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      } else {
        sessionStorage.removeItem(key);
      }
    } catch {}
  })();
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
reportWebVitals();
