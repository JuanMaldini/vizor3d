import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import "./styles/App.css";
import "./styles/components.css";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const RSample = React.lazy(() => import("./pages/projects/rodri_01/RSample"));

const ModelViewer_Car = React.lazy(() => import("./pages/projects/modelViewer/ModelViewer_Car"));
const ModelViewer_Lamp = React.lazy(() => import("./pages/projects/modelViewer/ModelViewer_Lamp"));
const ModelViewer_Balance = React.lazy(() => import("./pages/projects/modelViewer/ModelViewer_Balance"));

const Sampleai_01 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_01"));
const Sampleai_02 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_02"));
const Sampleai_03 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_03"));
const Sampleai_04 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_04"));
const Sampleai_05 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_05"));
const Sampleai_06 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_06"));
const Sampleai_07 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_07"));
const Sampleai_08 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_08"));
const Sampleai_09 = React.lazy(() => import("./pages/projects/sampleai09/Sample_AI09_09"));
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

        { path: "rsample", element: <RSample/> },
        { path: "sampleai_01", element: <Sampleai_01/> },
        { path: "sampleai_02", element: <Sampleai_02/> },
        { path: "sampleai_03", element: <Sampleai_03/> },
        { path: "sampleai_04", element: <Sampleai_04/> },
        { path: "sampleai_05", element: <Sampleai_05/> },
        { path: "sampleai_06", element: <Sampleai_06/> },
        { path: "sampleai_07", element: <Sampleai_07/> },
        { path: "sampleai_08", element: <Sampleai_08/> },
        { path: "sampleai_09", element: <Sampleai_09/> },

        { path: "modelviewercar", element: <ModelViewer_Car/> },
        { path: "modelviewerlamp", element: <ModelViewer_Lamp/> },
        { path: "modelviewerbalance", element: <ModelViewer_Balance/> },

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
