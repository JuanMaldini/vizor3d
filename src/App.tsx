import React, { Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import "./styles/App.css";
import "./styles/components.css";
import "./styles/pannellum-overrides.css";

const Home = React.lazy(() => import("./pages/home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const MV_Car = React.lazy(() => import("./pages/projects/modelViewer/MV_Car"));
const MV_Lamp = React.lazy(() => import("./pages/projects/modelViewer/MV_Lamp"));
const MV_Chair01 = React.lazy(() => import("./pages/projects/modelViewer/MV_Chair01"));
const MV_Deco01 = React.lazy(() => import("./pages/projects/modelViewer/MV_Deco01"));
const Noiseless_Sample01 = React.lazy(() => import("./pages/projects/panoramas/P_Noiseless_Sample01"));
const Sampleai = React.lazy(() => import("./pages/projects/panoramas/P_Sampleai"));
const AR_Template = React.lazy(() => import("./pages/projects/augmentedReality/AR_Template"));
const AR_Template_Location = React.lazy(() => import("./pages/projects/augmentedReality/AR_Template_Location"));
const ErrorPage = React.lazy(() => import("./error"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "noiseless_sample01", element: <Noiseless_Sample01 /> },
      { path: "sampleai", element: <Sampleai /> },
      { path: "mv-car", element: <MV_Car /> },
      { path: "mv-lamp", element: <MV_Lamp /> },
      { path: "mv-chair01", element: <MV_Chair01 /> },
      { path: "mv-deco01", element: <MV_Deco01 /> },
      { path: "ar-template", element: <AR_Template /> },
      { path: "ar-template-location", element: <AR_Template_Location /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  // Light prefetch of common routes when the app is idle to avoid white screens on first visit
  useEffect(() => {
    const prefetch = () => {
      // Fire-and-forget dynamic imports to warm route chunks
      import("./pages/home");
      import("./pages/Projects");
      import("./pages/projects/modelViewer/MV_Car");
      import("./pages/projects/modelViewer/MV_Lamp");
      import("./pages/projects/modelViewer/MV_Chair01");
      import("./pages/projects/modelViewer/MV_Deco01");
      import("./pages/projects/panoramas/P_Noiseless_Sample01");
      import("./pages/projects/panoramas/P_Sampleai");
      import("./pages/projects/augmentedReality/AR_Template");
      import("./pages/projects/augmentedReality/AR_Template_Location");
      import("./error");
    };
    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void) => number)
      | undefined;
    if (typeof ric === "function") {
      ric(prefetch);
    } else {
      // Fallback after a short delay if requestIdleCallback is not available
      const t = setTimeout(prefetch, 1200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <Suspense
      fallback={
        <div style={{ padding: "2rem", textAlign: "center" }}>Loading…</div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
