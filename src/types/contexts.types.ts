import type { Dispatch, ReactNode, SetStateAction } from "react";

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
