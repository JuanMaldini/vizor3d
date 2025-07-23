import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Index from "./pages";
import "./App.css";

const ErrorPage = React.lazy(() => import("./error"));
const Home = React.lazy(() => import("./pages/home"));
const Sample1 = React.lazy(() => import("./pages/Sample1"));
const Sample2 = React.lazy(() => import("./pages/Sample2"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "Sample1", element: <Sample1/> },
        { path: "Sample2", element: <Sample2/> },
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
