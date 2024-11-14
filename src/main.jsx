import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto	">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
