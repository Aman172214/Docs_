import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import Home from "./pages/Home";
import Editor from "./components/Editor";
import "./app.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/editor",
      element: <Navigate to={`/editor/${uuid()}`} replace />,
    },
    {
      path: `/editor/:id`,
      element: <Editor />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
