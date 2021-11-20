import React, { ReactNode } from 'react';
import { baseReducer } from './reducers';

const [rootReducer, initialRootState] = baseReducer;
const GlobalStoreContext = React.createContext(initialRootState);

export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = React.useReducer(rootReducer, initialRootState);
    //
    const value = { state, dispatch };
    console.log(state);
    return <GlobalStoreContext.Provider value={value}>{children}</GlobalStoreContext.Provider>;
};

const useGlobalStoreProvider = () => {
    const context = React.useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error('This must be used within a provider');
    }
    return context;
};

export default useGlobalStoreProvider;
