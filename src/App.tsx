import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Index from "./pages";
import "./App.css";

const ErrorPage = React.lazy(() => import("./error"));
const Home = React.lazy(() => import("./pages/home"));
const TestRodri = React.lazy(() => import("./pages/TestRodri"));
const TestRodri2 = React.lazy(() => import("./pages/TestRodri2"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "TestRodri", element: <TestRodri/> },
        { path: "TestRodri2", element: <TestRodri2/> },
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
