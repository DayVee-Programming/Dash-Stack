import LogoImage from "@/components/images/LogoImage";
import { useContext } from "react";
import PageButton from "@/components/buttons/PageButton";
import { Link } from "react-router";
import MainHeading from "@/components/headings/MainHeading";
import type { Page } from "@/types/contexts.types";
import { AppContext } from "@/contexts/AppContext";

const MainSidebar = () => {
  const { pages, isMainSidebarCollapsed, breakpoints } = useContext(AppContext);

  return (
    <div
      className={`main-sidebar ${isMainSidebarCollapsed || breakpoints[992] ? "collapsed" : ""}`}
    >
      <Link className="logo" to="/">
        <LogoImage />
      </Link>
      <nav>
        <ul className="pages">
          {pages.map((page: Page) => (
            <li className="pages-item" key={page.name}>
              {page?.type === "section" ? (
                <MainHeading page={page} key={page.name} />
              ) : (
                <PageButton page={page} key={page.name} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainSidebar;
