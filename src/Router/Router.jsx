import App from "@/App";
import About from "@/page/About";
import Home from "@/page/Home";
import {
    createBrowserRouter,
  } from "react-router-dom";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App /> ,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
  ]);