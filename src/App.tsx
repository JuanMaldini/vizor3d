import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import "./styles/App.css";
import "./styles/components.css";

const Home = React.lazy(() => import("./pages/home"));
const Projects = React.lazy(() => import("./pages/Projects"));

const ModelViewer_Car = React.lazy(() => import("./pages/projects/modelViewer/MV_Car"));
const ModelViewer_Lamp = React.lazy(() => import("./pages/projects/modelViewer/MV_Lamp"));

const Noiseless_Sample01 = React.lazy(() => import("./pages/projects/panoramas/P_Noiseless_Sample01"));

const Sampleai = React.lazy(() => import("./pages/projects/panoramas/P_Sampleai"));

const ErrorPage = React.lazy(() => import("./error"));
const router = createBrowserRouter(
  [
    { 
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },

        { path: "projects", element: <Projects/> },

        { path: "Noiseless_Sample01", element: <Noiseless_Sample01/> },
        { path: "Sampleai", element: <Sampleai/> },

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
