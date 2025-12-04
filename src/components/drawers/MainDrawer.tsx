import { Fragment, useContext } from "react";
import { Link } from "react-router";
import LogoImage from "@/components/images/LogoImage";
import MainHeading from "@/components/headings/MainHeading";
import PageButton from "@/components/buttons/PageButton";
import ArrowDownImage from "@/components/images/ArrowDownImage";
import CloseImage from "@/components/images/CloseImage";
import EnUsImage from "@/components/images/EnUsImage";
import type { Page } from "@/types/contexts.types";
import LanguagePopper from "@/components/poppers/LanguagePopper";
import { DropdownContext } from "@/contexts/DropdownContext";
import { AppContext } from "@/contexts/AppContext";

const MainDrawer = () => {
  // Variables
  const { pages, setIsMainDrawerOpen } = useContext(AppContext);
  const { isLanguageDropdownOpen, languageDropdownAnchor, clickDropdownAway, toggleDropdown } =
    useContext(DropdownContext);

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
              <Fragment key={page.name}>
                <li className="pages-item search">
                  <input
                    className="search-input"
                    id="search-input"
                    type="text"
                    placeholder="Search"
                  />
                </li>
                <li className="pages-item language" onClick={(e) => toggleDropdown(e, "language")}>
                  <figure className="language-figure">
                    <EnUsImage />
                  </figure>
                  <span className="language-span">English</span>
                  <ArrowDownImage />
                </li>
                <LanguagePopper
                  isLanguageDropdownOpen={isLanguageDropdownOpen}
                  languageDropdownAnchor={languageDropdownAnchor}
                  clickDropdownAway={clickDropdownAway}
                  offsetY={3}
                />
                <PageButton page={page} />
              </Fragment>
            ) : (
              <li className="pages-item" key={page.name}>
                {page?.type === "section" ? (
                  <MainHeading page={page} />
                ) : (
                  <PageButton page={page} />
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
