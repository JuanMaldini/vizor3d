import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import "./styles/App.css";
import "./styles/components.css";
import "./styles/pannellum-overrides.css";

const Home = React.lazy(() => import("./pages/home"));
const Projects = React.lazy(() => import("./pages/Projects"));

const ModelViewer_Car = React.lazy(() => import("./pages/projects/modelViewer/MV_Car"));
const ModelViewer_Lamp = React.lazy(() => import("./pages/projects/modelViewer/MV_Lamp"));
const ModelViewer_Chair01 = React.lazy(() => import("./pages/projects/modelViewer/MV_Chair01"));
const ModelViewer_Deco01 = React.lazy(() => import("./pages/projects/modelViewer/MV_Deco01"));

const Mindar_sample01 = React.lazy(() => import("./pages/projects/mindar/mindar-sample-01"));

const Noiseless_Sample01 = React.lazy(() => import("./pages/projects/panoramas/P_Noiseless_Sample01"));

const Sampleai = React.lazy(() => import("./pages/projects/panoramas/P_Sampleai"));

const AR_Template = React.lazy(() => import("./pages/projects/augmentedReality/AR_Template"));
const AR_Template_Location = React.lazy(() => import("./pages/projects/augmentedReality/AR_Template_Location"));

const ErrorPage = React.lazy(() => import("./error"));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },

        { path: "projects", element: <Projects /> },

        { path: "Noiseless_Sample01", element: <Noiseless_Sample01 /> },
        { path: "Sampleai", element: <Sampleai /> },

        { path: "ModelViewer_Sample_Car", element: <ModelViewer_Car /> },
        { path: "ModelViewer_Sample_Lamp", element: <ModelViewer_Lamp /> },
        { path: "ModelViewer_Sample_Chair01", element: <ModelViewer_Chair01 />,},
        { path: "ModelViewer_Samplwe_Deco01", element: <ModelViewer_Deco01 /> },

        { path: "Mindar_sample01", element: <Mindar_sample01 /> },

        { path: "AR_Template", element: <AR_Template /> },
        { path: "AR_Template_Location", element: <AR_Template_Location /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
