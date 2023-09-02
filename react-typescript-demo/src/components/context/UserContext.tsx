import { createContext, useState } from "react";

export type Iprops = {
  name: string;
  email: string;
};

type UserContextType = {
  user: Iprops | null;
  setUser: React.Dispatch<React.SetStateAction<Iprops | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<Iprops | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
