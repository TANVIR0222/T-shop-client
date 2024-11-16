import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto	">
    <StrictMode>
    <ToastContainer />
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
