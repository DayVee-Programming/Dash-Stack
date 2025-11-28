import { createContext, type ReactNode } from "react";

type AppContextProviderProps = {
  children: ReactNode;
};
type AppContext = {};

export const AppContext = createContext({} as AppContext);
export function AppContextProvider({ children }: AppContextProviderProps) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
