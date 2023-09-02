import { createContext } from "react";
import { theme } from "./theme";

type Iprops = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: Iprops) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
