import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AppContextProvider } from "@/context/appContext.tsx";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import DefaultPage from "@/pages/DefaultPage";
import HomeContent from "./components/contents/HomeContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: "/products",
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />

      <ToastContainer />
    </AppContextProvider>
  </StrictMode>
);
