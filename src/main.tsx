import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "@/pages/HomePage.tsx";
import "@/assets/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AppContextProvider } from "@/context/appContext.tsx";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import ProductsPage from "@/pages/ProductsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />

      <ToastContainer />
    </AppContextProvider>
  </StrictMode>
);
