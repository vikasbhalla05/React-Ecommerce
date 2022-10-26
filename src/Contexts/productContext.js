// create a context

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";
const AppContext = createContext();

// Provider

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {

    dispatch({type: 'LOADING'});
    try {
      let fetchData = await axios.get(url);
      let productData = fetchData.data;
      dispatch({ type: "MY_PRODUCTS", payload: productData });
    } catch (error) {
      dispatch({ type: "ERROR"});
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Here" }}>
      {children}
    </AppContext.Provider>
  );
};

// consumer => useContext hook
// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
