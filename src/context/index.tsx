import React, { ReactNode, useEffect, useState } from "react";
import { useAppStorage } from "../hooks";
import { baseReducer } from "./reducers";
import { UserReducerType } from "./reducers/userReducer";

const [rootReducer, initialRootState] = baseReducer;
const GlobalStoreContext = React.createContext(initialRootState);

export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
  //

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const { getFromStore, clearStore } = useAppStorage();
  const { MUTATE_USER } = UserReducerType;

  const [state, dispatch] = React.useReducer(rootReducer, initialRootState);
  //

  const checkAuthenticated = async () => {
    const user = (await getFromStore("user")) || {};

    if (user?.token) {
      setIsAuthenticated(true);
      dispatch({ type: MUTATE_USER, payload: user });
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, [isAuthenticated]);

  const logoutUser = async () => {
    await clearStore();
    setIsAuthenticated(false);
  };

  const value = { state, dispatch };
  return (
    <GlobalStoreContext.Provider
      value={{ ...value, isAuthenticated, logoutUser, checkAuthenticated }}
    >
      {children}
    </GlobalStoreContext.Provider>
  );
};

const useGlobalStoreProvider = () => {
  const context = React.useContext(GlobalStoreContext);
  if (context === undefined) {
    throw new Error("This must be used within a provider");
  }
  return context;
};

export default useGlobalStoreProvider;
