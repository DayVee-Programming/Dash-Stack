import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ClickDropdownAway, ToggleDropdown } from "@/types/components.types";

export type AppContextProps = {
  pages: Page[];
  setPages: Dispatch<SetStateAction<Page[]>>;
  isMainSidebarOpen: IsMainSidebarOpen;
  setIsMainSidebarOpen: Dispatch<SetStateAction<IsMainSidebarOpen>>;
  isMainSidebarCollapsed: IsMainSidebarCollapsed;
  setIsMainSidebarCollapsed: Dispatch<SetStateAction<IsMainSidebarCollapsed>>;
  breakpoints: Breakpoints;
  setBreakpoints: Dispatch<SetStateAction<Breakpoints>>;
  isMainDrawerOpen: IsMainDrawerOpen;
  setIsMainDrawerOpen: Dispatch<SetStateAction<IsMainDrawerOpen>>;
  dashboardCards: DashboardCard[];
  setDashboardCards: Dispatch<SetStateAction<DashboardCard[]>>;
};

export type AppContextProviderProps = {
  children: ReactNode;
};

export type Page = {
  name: string;
  image?: ReactNode;
  route?: string;
  type?: "section";
};

export type IsMainSidebarOpen = boolean;

export type IsMainSidebarCollapsed = boolean;

export type IsMainDrawerOpen = boolean;

export type Breakpoints = {
  480: boolean;
  576: boolean;
  768: boolean;
  992: boolean;
  1200: boolean;
  1400: boolean;
};

export type DashboardCard = {
  title: string;
  number: string;
  image: ReactNode;
  trend: string;
  percentage: string;
  description: string;
};

export type IsProfileDropdownOpen = boolean;

export type IsLanguageDropdownOpen = boolean;

export type IsNotificationDropdownOpen = boolean;

export type ProfileDropdownAnchor = HTMLElement | null;

export type LanguageDropdownAnchor = HTMLElement | null;

export type NotificationDropdownAnchor = HTMLElement | null;

export type DropdownContextProps = {
  isProfileDropdownOpen: IsProfileDropdownOpen;
  isLanguageDropdownOpen: IsLanguageDropdownOpen;
  isNotificationDropdownOpen: IsNotificationDropdownOpen;
  profileDropdownAnchor: ProfileDropdownAnchor;
  languageDropdownAnchor: LanguageDropdownAnchor;
  notificationDropdownAnchor: NotificationDropdownAnchor;
  toggleDropdown: ToggleDropdown;
  clickDropdownAway: ClickDropdownAway;
};

export type DropdownContextProviderProps = {
  children: ReactNode;
};
