import type { FC } from "react";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "@/context/appContext";

const App: FC = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <ToastContainer />
      </AppContextProvider>
    </div>
  );
};

export default App;
