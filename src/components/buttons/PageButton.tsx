import type { Page } from "@/context/appContext";
import type { FC } from "react";
import { NavLink } from "react-router";

export type PageButtonProps = {
  page: Page;
};

const PageButton: FC<PageButtonProps> = ({ page }) => {
  return (
    <NavLink
      className={({ isActive }) => `page-button ${isActive ? "active" : ""}`}
      to={page.route ?? "#"}
    >
      <figure className="page-button-figure">{page?.image}</figure>
      <span className="page-button-span">{page.name}</span>
    </NavLink>
  );
};

export default PageButton;
