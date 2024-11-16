import App from "@/App";
import About from "@/page/About/About";
import Collection from "@/page/Collection/Collection";
import Home from "@/page/Home/Home";
import ProductView from "@/page/view/ProductView";
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
        {
          path: "/collection",
          element: <Collection />,
        },
        {
          path: "/product/:id",
          element: <ProductView />,
        },
        
      ]
    },
  ]);