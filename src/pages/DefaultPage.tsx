import MainSidebar from "@/components/sidebars/MainSidebar";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";
import { Outlet } from "react-router";

const DefaultPage = () => {
  const { isMainSidebarOpen } = useContext(AppContext);

  return (
    <div className="default-page">
      <div className="container wrapper">
        {isMainSidebarOpen ? <MainSidebar /> : null}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultPage;
