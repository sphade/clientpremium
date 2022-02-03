import React, { ReactNode, useState, useEffect } from "react";
import { baseReducer } from "./reducers";
import { useAppStorage } from "../hooks";

const [rootReducer, initialRootState] = baseReducer;
const AuthenticationContext = React.createContext(initialRootState);

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { getFromStore } = useAppStorage();

  const [state, dispatch] = React.useReducer(rootReducer, initialRootState);

  const checkAuthenticated = async () => {
    const user = (await getFromStore("user")) || {};

    if (user?.token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const value = { state, dispatch };
  return (
    <AuthenticationContext.Provider value={{ ...value, isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthenticationProvider = () => {
  const context = React.useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error("This must be used within a provider");
  }
  return context;
};

export default useAuthenticationProvider;
