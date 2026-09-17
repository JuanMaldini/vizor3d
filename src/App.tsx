import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import MV_Car from "./pages/projects/modelViewer/MV_Car";
import MV_Lamp from "./pages/projects/modelViewer/MV_Lamp";
import MV_Chair01 from "./pages/projects/modelViewer/MV_Chair01";
import MV_Deco01 from "./pages/projects/modelViewer/MV_Deco01";
import Noiseless_Sample01 from "./pages/projects/panoramas/P_Noiseless_Sample01";
import Sampleai from "./pages/projects/panoramas/P_Sampleai";
import AR_Template from "./pages/projects/augmentedReality/AR_Template";
import AR_Template_Location from "./pages/projects/augmentedReality/AR_Template_Location";
import ErrorPage from "./error";
import "./styles/App.css";
import "./styles/components.css";
import "./styles/pannellum-overrides.css";
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
], { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
