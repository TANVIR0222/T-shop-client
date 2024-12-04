import App from "@/App";
import About from "@/page/About/About";
import AddProduct from "@/page/admin/AddProduct";
import ProductList from "@/page/admin/ProductList";
import UpdateProduct from "@/page/admin/UpdateProduct";
import UserList from "@/page/admin/UserList";
import Login from "@/page/auth/Login";
import Register from "@/page/auth/Register";
import Collection from "@/page/Collection/Collection";
import Home from "@/page/Home/Home";
import Order from "@/page/order/Order";
import PlaceOrder from "@/page/order/PlaceOrder";
import CartView from "@/page/view/CartView";
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
        {
          path: "/add-order",
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
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/add-product",
          element: <AddProduct />,
        },
        {
          path: "/all-product",
          element: <ProductList />,
        },
        {
          path: "/update-product/:id",
          element: <UpdateProduct />,
        },
        {
          path: "/all-user",
          element: <UserList />,
        },
        
      ]
    },
  ]);