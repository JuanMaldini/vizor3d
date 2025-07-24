import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Index from "./pages";
import "./App.css";
import "./components/components.css";
import Samples from "./pages/Samples";

//IMPORT ABOUT PAGE
 const About = React.lazy(() => import("./pages/About"));

//IMPORTING SAMPLE AI09
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
const Home = React.lazy(() => import("./pages/home"));

//DECLARING SAMPLE AI09

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [

        { index: true, element: <Home /> },

        { path: "samples", element: <Samples/> },
        
        { path: "sampleai_01", element: <Sampleai_01/> },
        { path: "sampleai_02", element: <Sampleai_02/> },
        { path: "sampleai_03", element: <Sampleai_03/> },
        { path: "sampleai_04", element: <Sampleai_04/> },
        { path: "sampleai_05", element: <Sampleai_05/> },
        { path: "sampleai_06", element: <Sampleai_06/> },
        { path: "sampleai_07", element: <Sampleai_07/> },
        { path: "sampleai_08", element: <Sampleai_08/> },
        { path: "sampleai_09", element: <Sampleai_09/> },
        
        { path: "about", element: <About/> },

      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
