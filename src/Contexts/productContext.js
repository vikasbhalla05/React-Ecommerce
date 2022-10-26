// create a context

import axios from "axios";
import { createContext, useContext, useEffect } from "react";
const AppContext = createContext();

// Provider

const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({children}) => {

    const getProducts = async (url) => {
        let fetchData = await axios.get(url);
        console.log(fetchData.data)
    }

    useEffect(() => {
      getProducts(API);
    }, [])
    
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