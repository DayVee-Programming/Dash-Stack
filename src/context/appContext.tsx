import ChatImage from "@/components/images/ChatImage";
import GridImage from "@/components/images/GridImage";
import Grid2Image from "@/components/images/Grid2Image";
import HeartImage from "@/components/images/HeartImage";
import ListImage from "@/components/images/ListImage";
import SpeedImage from "@/components/images/SpeedImage";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
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

export type Page = {
  name: string;
  image?: ReactNode;
  route?: string;
  type?: "section";
};
type AppContextProviderProps = {
  children: ReactNode;
};
type AppContext = {
  pages: Page[];
  setPages: Dispatch<SetStateAction<Page[]>>;
};

export const AppContext = createContext({} as AppContext);
export function AppContextProvider({ children }: AppContextProviderProps) {
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

  return (
    <AppContext.Provider
      value={{
        pages,
        setPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
