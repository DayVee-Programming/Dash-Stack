import ChatImage from "@/components/images/ChatImage";
import GridImage from "@/components/images/GridImage";
import Grid2Image from "@/components/images/Grid2Image";
import HeartImage from "@/components/images/HeartImage";
import ListImage from "@/components/images/ListImage";
import SpeedImage from "@/components/images/SpeedImage";
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import GiftImage from "@/components/images/GiftImage";
import CalendarImage from "@/components/images/CalendarImage";
import TaskImage from "@/components/images/TaskImage";
import PeopleImage from "@/components/images/PeopleImage";
import CashImage from "@/components/images/CashImage";
import GraphImage from "@/components/images/GraphImage";
import PersonImage from "@/components/images/PersonImage";
import Grid3Image from "@/components/images/Grid3Image";
import SettingsImage from "@/components/images/SettingsImage";
import LogoutImage from "@/components/images/LogoutImage";
import People2Image from "@/components/images/People2Image";
import BoxImage from "@/components/images/BoxImage";
import Graph2Image from "@/components/images/Graph2Image";
import TimeImage from "@/components/images/TimeImage";

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
type AppContextProviderProps = {
  children: ReactNode;
};
type AppContext = {
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

export const AppContext = createContext({} as AppContext);
export function AppContextProvider({ children }: AppContextProviderProps) {
  // Variables
  const [pages, setPages] = useState<Page[]>([
    {
      name: "Dashboard",
      image: <SpeedImage />,
      route: "/",
    },
    {
      name: "Products",
      image: <GridImage />,
      route: "/products",
    },
    {
      name: "Favorites",
      image: <HeartImage />,
      route: "/favorites",
    },
    {
      name: "Inbox",
      image: <ChatImage />,
      route: "/inbox",
    },
    {
      name: "Order Lists",
      image: <ListImage />,
      route: "/orders",
    },
    {
      name: "Product Stock",
      image: <Grid2Image />,
      route: "/products/stock",
    },
    {
      name: "PAGES",
      type: "section",
    },
    {
      name: "Pricing",
      image: <GiftImage />,
      route: "/pricing",
    },
    {
      name: "Calendar",
      image: <CalendarImage />,
      route: "/calendar",
    },
    {
      name: "To-Do",
      image: <TaskImage />,
      route: "/todo",
    },
    {
      name: "Contact",
      image: <PeopleImage />,
      route: "/contact",
    },
    {
      name: "Invoice",
      image: <CashImage />,
      route: "/invoice",
    },
    {
      name: "UI Elements",
      image: <GraphImage />,
      route: "/ui",
    },
    {
      name: "Team",
      image: <PersonImage />,
      route: "/team",
    },
    {
      name: "Table",
      image: <Grid3Image />,
      route: "/table",
    },
    {
      name: "",
      type: "section",
    },
    {
      name: "Settings",
      image: <SettingsImage />,
      route: "/settings",
    },
    {
      name: "Logout",
      image: <LogoutImage />,
      route: "/logout",
    },
  ]);
  const [isMainSidebarOpen, setIsMainSidebarOpen] = useState<IsMainSidebarOpen>(true);
  const [isMainSidebarCollapsed, setIsMainSidebarCollapsed] =
    useState<IsMainSidebarCollapsed>(false);
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    480: false,
    576: false,
    768: false,
    992: false,
    1200: false,
    1400: false,
  });
  const [isMainDrawerOpen, setIsMainDrawerOpen] = useState<IsMainDrawerOpen>(false);
  const [dashboardCards, setDashboardCards] = useState<DashboardCard[]>([
    {
      title: "Total User",
      number: "40,689",
      image: <People2Image />,
      trend: "up",
      percentage: "8.5%",
      description: "Up from yesterday",
    },
    {
      title: "Total Order",
      number: "10293",
      image: <BoxImage />,
      trend: "up",
      percentage: "1.3%",
      description: "Up from past week",
    },
    {
      title: "Total Sales",
      number: "$89,000",
      image: <Graph2Image />,
      trend: "down",
      percentage: "4.3%",
      description: "Down from yesterday",
    },
    {
      title: "Total Pending",
      number: "2040",
      image: <TimeImage />,
      trend: "up",
      percentage: "1.8%",
      description: "Up from yesterday",
    },
  ]);

  // Hooks
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateBreakpoints = () => {
      setBreakpoints({
        480: window.innerWidth <= 480,
        576: window.innerWidth <= 576,
        768: window.innerWidth <= 768,
        992: window.innerWidth <= 992,
        1200: window.innerWidth <= 1200,
        1400: window.innerWidth <= 1400,
      });
      setIsMainSidebarCollapsed(window.innerWidth <= 992);
    };
    updateBreakpoints();
    let timer = 0;
    const onResize = () => {
      // Debounce
      window.clearTimeout(timer);
      timer = window.setTimeout(updateBreakpoints, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        pages,
        setPages,
        isMainSidebarOpen,
        setIsMainSidebarOpen,
        isMainSidebarCollapsed,
        setIsMainSidebarCollapsed,
        breakpoints,
        setBreakpoints,
        isMainDrawerOpen,
        setIsMainDrawerOpen,
        dashboardCards,
        setDashboardCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
