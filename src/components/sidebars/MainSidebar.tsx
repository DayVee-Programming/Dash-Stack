import LogoImage from "@/components/images/LogoImage";
import { AppContext, type Page } from "@/context/appContext";
import { useContext } from "react";
import PageButton from "@/components/buttons/PageButton";
import { Link } from "react-router";
import MainHeading from "@/components/headings/MainHeading";

const MainSidebar = () => {
  const { pages } = useContext(AppContext);

  return (
    <div className="sidebar-main">
      <Link className="logo" to="/">
        <LogoImage />
      </Link>
      <nav>
        <ul className="pages">
          <li className="pages-item">
            {pages.map((page: Page) =>
              page?.type === "section" ? (
                <MainHeading page={page} key={page.name} />
              ) : (
                <PageButton page={page} key={page.name} />
              )
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainSidebar;
