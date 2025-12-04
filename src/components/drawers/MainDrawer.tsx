import { AppContext } from "@/context/appContext";
import { useContext } from "react";
import { Link } from "react-router";
import LogoImage from "@/components/images/LogoImage";
import MainHeading from "@/components/headings/MainHeading";
import PageButton from "@/components/buttons/PageButton";
import ArrowDownImage from "@/components/images/ArrowDownImage";
import CloseImage from "@/components/images/CloseImage";
import EnUsImage from "@/components/images/EnUsImage";
import type { Page } from "@/types/contexts.types";

const MainDrawer = () => {
  const { pages, setIsMainDrawerOpen } = useContext(AppContext);

  return (
    <div className="main-drawer">
      <Link className="logo" to="/">
        <LogoImage />
      </Link>
      <figure className="main-drawer-figure" onClick={() => setIsMainDrawerOpen(false)}>
        <CloseImage />
      </figure>
      <nav>
        <ul className="pages">
          {pages.map((page: Page) =>
            page.name === "Settings" ? (
              <>
                <li className="pages-item search">
                  <input
                    className="search-input"
                    id="search-input"
                    type="text"
                    placeholder="Search"
                  />
                </li>
                <li className="pages-item language">
                  <figure className="language-figure">
                    <EnUsImage />
                  </figure>
                  <span className="language-span">English</span>
                  <ArrowDownImage />
                </li>
                <PageButton page={page} key={page.name} />
              </>
            ) : (
              <li className="pages-item">
                {page?.type === "section" ? (
                  <MainHeading page={page} key={page.name} />
                ) : (
                  <PageButton page={page} key={page.name} />
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainDrawer;
