import MainDrawer from "@/components/drawers/MainDrawer";
import MainSidebar from "@/components/sidebars/MainSidebar";
import { AppContext } from "@/context/appContext";
import { Drawer } from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router";

const DefaultPage = () => {
  const { isMainSidebarOpen, isMainDrawerOpen, setIsMainDrawerOpen } = useContext(AppContext);

  return (
    <div className="default-page">
      <div className="container wrapper">
        {isMainSidebarOpen ? <MainSidebar /> : null}
        <Drawer
          className="main-drawer-container"
          open={isMainDrawerOpen}
          onClose={() => setIsMainDrawerOpen(false)}
          slotProps={{
            paper: {
              sx: {
                width: "250px",
              },
            },
          }}
        >
          <MainDrawer />
        </Drawer>

        {/* Main content */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultPage;
