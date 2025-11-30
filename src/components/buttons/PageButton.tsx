import { AppContext, type Page } from "@/context/appContext";
import { Tooltip } from "@mui/material";
import { useContext, type FC } from "react";
import { NavLink } from "react-router";

export type PageButtonProps = {
  page: Page;
};

const PageButton: FC<PageButtonProps> = ({ page }) => {
  const { isMainSidebarCollapsed, breakpoints } = useContext(AppContext);

  return (
    <Tooltip
      title={isMainSidebarCollapsed && !breakpoints[768] ? page?.name : null}
      placement="right"
      slotProps={{
        tooltip: {
          sx: { fontSize: "15px", p: "14px 18px" },
        },
      }}
    >
      <div>
        <NavLink
          className={({ isActive }) => `page-button ${isActive ? "active" : ""}`}
          to={page.route ?? "#"}
        >
          <figure className="page-button-figure">{page?.image}</figure>
          <span className="page-button-span">{page.name}</span>
        </NavLink>
      </div>
    </Tooltip>
  );
};

export default PageButton;
