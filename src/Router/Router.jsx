import App from "@/App";
import About from "@/page/About/About";
import Login from "@/page/auth/Login";
import Collection from "@/page/Collection/Collection";
import Home from "@/page/Home/Home";
import Order from "@/page/order/Order";
import PlaceOrder from "@/page/order/PlaceOrder";
import CartView from "@/page/view/CartView";
import ProductView from "@/page/view/ProductView";
import AddToCart from "@/utils/addToCart";
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
        {
          path: "/adProduct",
          element: <CartView />,
        },
        {
          path: "/placeOrder",
          element: <PlaceOrder />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        
      ]
    },
  ]);