import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import "./styles/App.css";
import "./styles/components.css";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));

const ModelViewer_Car = React.lazy(() => import("./pages/projects/ModelViewer/ModelViewer_Car"));
const ModelViewer_Lamp = React.lazy(() => import("./pages/projects/ModelViewer/ModelViewer_Lamp"));

const Noiseless_Sample01 = React.lazy(() => import("./pages/projects/Noiseless/Noiseless_Sample01"));

const Sampleai_01 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_01"));
const Sampleai_02 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_02"));
const Sampleai_03 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_03"));
const Sampleai_04 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_04"));
const Sampleai_05 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_05"));
const Sampleai_06 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_06"));
const Sampleai_07 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_07"));
const Sampleai_08 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_08"));
const Sampleai_09 = React.lazy(() => import("./pages/projects/Sampleai09/Sample_AI09_09"));

const ErrorPage = React.lazy(() => import("./error"));
const router = createBrowserRouter(
  [
    { 
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },

        { path: "about", element: <About/> },
        { path: "projects", element: <Projects/> },

        { path: "Noiseless_Sample01", element: <Noiseless_Sample01/> },

        { path: "Sampleai_01", element: <Sampleai_01/> },
        { path: "Sampleai_02", element: <Sampleai_02/> },
        { path: "Sampleai_03", element: <Sampleai_03/> },
        { path: "Sampleai_04", element: <Sampleai_04/> },
        { path: "Sampleai_05", element: <Sampleai_05/> },
        { path: "Sampleai_06", element: <Sampleai_06/> },
        { path: "Sampleai_07", element: <Sampleai_07/> },
        { path: "Sampleai_08", element: <Sampleai_08/> },
        { path: "Sampleai_09", element: <Sampleai_09/> },

        { path: "ModelViewer_Car", element: <ModelViewer_Car/> },
        { path: "ModelViewer_Lamp", element: <ModelViewer_Lamp/> },

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
