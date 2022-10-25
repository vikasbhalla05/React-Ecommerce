// create a context

import { createContext, useContext } from "react";
const AppContext = createContext();

// Provider

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{ myName: "Here" }}>
        {children}
    </AppContext.Provider>;
};

// consumer => useContext hook
// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
  };

export {AppProvider, AppContext, useProductContext};