import MenuImage from "@/components/images/MenuImage";
import NotificationImage from "@/components/images/NotificationImage";
import { useContext, useRef } from "react";
import ArrowDownImage from "@/components/images/ArrowDownImage";
import SearchImage from "@/components/images/SearchImage";
import EnUsImage from "@/components/images/EnUsImage";
import PersonImage from "@/components/images/PersonImage";
import ProfilePopper from "@/components/poppers/ProfilePopper";
import LanguagePopper from "@/components/poppers/LanguagePopper";
import NotificationPopper from "@/components/poppers/NotificationPopper";
import { DropdownContext } from "@/contexts/DropdownContext";
import { AppContext } from "@/contexts/AppContext";

const MainHeader = () => {
  // Variables
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isMainSidebarCollapsed, setIsMainSidebarCollapsed, breakpoints, setIsMainDrawerOpen } =
    useContext(AppContext);
  const {
    isProfileDropdownOpen,
    isLanguageDropdownOpen,
    isNotificationDropdownOpen,
    profileDropdownAnchor,
    languageDropdownAnchor,
    notificationDropdownAnchor,
    toggleDropdown,
    clickDropdownAway,
  } = useContext(DropdownContext);

  // Synchronous functions
  const clickSearchImage = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const toggleSidebar = () => {
    setIsMainSidebarCollapsed(!isMainSidebarCollapsed);
    if (breakpoints[768]) {
      setIsMainDrawerOpen(true);
    }
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
        <figure className="right-figure" onClick={(e) => toggleDropdown(e, "notification")}>
          <NotificationImage />
          <span className="right-figure-span">6</span>
        </figure>
        <NotificationPopper
          isNotificationDropdownOpen={isNotificationDropdownOpen}
          notificationDropdownAnchor={notificationDropdownAnchor}
          clickDropdownAway={clickDropdownAway}
        />
        <div className="language" onClick={(e) => toggleDropdown(e, "language")}>
          <figure className="language-figure">
            <EnUsImage />
          </figure>
          <span className="language-span">English</span>
          <ArrowDownImage />
        </div>
        <LanguagePopper
          isLanguageDropdownOpen={isLanguageDropdownOpen}
          languageDropdownAnchor={languageDropdownAnchor}
          clickDropdownAway={clickDropdownAway}
        />
        <div className="profile" onClick={(e) => toggleDropdown(e, "profile")}>
          <div className="profile-content">
            <figure className="profile-content-figure">
              <PersonImage />
            </figure>
            <div className="desc">
              <p className="desc-text">Moni Roy</p>
              <span className="desc-span">Admin</span>
            </div>
          </div>
          <figure className="profile-figure">
            <ArrowDownImage />
          </figure>
        </div>
        <ProfilePopper
          isProfileDropdownOpen={isProfileDropdownOpen}
          profileDropdownAnchor={profileDropdownAnchor}
          clickDropdownAway={clickDropdownAway}
        />
      </div>
    </div>
  );
};

export default MainHeader;
