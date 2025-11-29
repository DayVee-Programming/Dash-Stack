import MenuImage from "@/components/images/MenuImage";
import NotificationImage from "@/components/images/NotificationImage";
import { useContext, useRef } from "react";
import ArrowDownImage from "@/components/images/ArrowDownImage";
import SearchImage from "@/components/images/SearchImage";
import { AppContext } from "@/context/appContext";

const MainHeader = () => {
  // Variables
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isMainSidebarCollapsed, setIsMainSidebarCollapsed } = useContext(AppContext);

  // Synchronous functions
  const clickSearchImage = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const toggleSidebar = () => {
    setIsMainSidebarCollapsed(!isMainSidebarCollapsed);
  };

  return (
    <div className="main-header">
      <div className="left">
        <figure className="left-figure" onClick={toggleSidebar}>
          <MenuImage />
        </figure>
        <div className="search">
          <figure className="search-figure" onClick={clickSearchImage}>
            <SearchImage />
          </figure>
          <input
            className="search-input"
            ref={searchInputRef}
            id="search-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="right">
        <figure className="right-figure">
          <NotificationImage />
          <span className="right-figure-span">6</span>
        </figure>
        <div className="language">
          <figure className="language-figure"></figure>
          <span className="language-span">English</span>
          <ArrowDownImage />
        </div>
        <div className="profile">
          <div className="profile-content">
            <figure className="profile-content-figure"></figure>
            <div className="desc">
              <p className="desc-text">Moni Roy</p>
              <span className="desc-span">Admin</span>
            </div>
          </div>
          <figure className="profile-figure">
            <ArrowDownImage />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
