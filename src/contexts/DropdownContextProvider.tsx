import type { ClickDropdownAway, ToggleDropdown } from "@/types/components.types";
import type { DropdownContextProviderProps, IsLanguageDropdownOpen, IsNotificationDropdownOpen, IsProfileDropdownOpen, LanguageDropdownAnchor, NotificationDropdownAnchor, ProfileDropdownAnchor } from "@/types/contexts.types";
import { useState } from "react";
import { DropdownContext } from "@/contexts/DropdownContext";

export function DropdownContextProvider({ children }: DropdownContextProviderProps) {
  // Variables
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<IsProfileDropdownOpen>(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    useState<IsLanguageDropdownOpen>(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState<IsNotificationDropdownOpen>(false);
  const [profileDropdownAnchor, setProfileDropdownAnchor] = useState<ProfileDropdownAnchor>(null);
  const [languageDropdownAnchor, setLanguageDropdownAnchor] =
    useState<LanguageDropdownAnchor>(null);
  const [notificationDropdownAnchor, setNotificationDropdownAnchor] =
    useState<NotificationDropdownAnchor>(null);

  // Synchronous functions
  const toggleDropdown: ToggleDropdown = (e, type) => {
    if (type === "profile") {
      setProfileDropdownAnchor(e.currentTarget);
      setIsProfileDropdownOpen(!isProfileDropdownOpen);
    } else if (type === "language") {
      setLanguageDropdownAnchor(e.currentTarget);
      setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    } else if (type === "notification") {
      setNotificationDropdownAnchor(e.currentTarget);
      setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    }
  };
  const clickDropdownAway: ClickDropdownAway = (e, type) => {
    if (type === "profile") {
      if (
        profileDropdownAnchor &&
        (e.target === profileDropdownAnchor || profileDropdownAnchor.contains(e.target as Node))
      ) {
        return;
      }
      setIsProfileDropdownOpen(false);
    } else if (type === "language") {
      if (
        languageDropdownAnchor &&
        (e.target === languageDropdownAnchor || languageDropdownAnchor.contains(e.target as Node))
      ) {
        return;
      }
      setIsLanguageDropdownOpen(false);
    } else if (type === "notification") {
      if (
        notificationDropdownAnchor &&
        (e.target === notificationDropdownAnchor ||
          notificationDropdownAnchor.contains(e.target as Node))
      ) {
        return;
      }
      setIsNotificationDropdownOpen(false);
    }
  };

  return (
    <DropdownContext.Provider
      value={{
        isProfileDropdownOpen,
        isLanguageDropdownOpen,
        isNotificationDropdownOpen,
        profileDropdownAnchor,
        languageDropdownAnchor,
        notificationDropdownAnchor,
        toggleDropdown,
        clickDropdownAway,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
