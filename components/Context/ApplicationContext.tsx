"use client";

import { ReactNode, createContext, useContext, useState } from "react";

const ApplicationContext = createContext({
  isLoggedIn: false,
  LoginStateRefreshher: () => {},
});

interface ContextProviderPropTypes {
  children: ReactNode;
}

export const ContextProvider = (props: ContextProviderPropTypes) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const LoginStateRefreshher = () => setIsLoggedIn(!isLoggedIn);

  return (
    <ApplicationContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        LoginStateRefreshher: LoginStateRefreshher,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export const ContextUsage = () => {
  return useContext(ApplicationContext);
};
