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
  singleError: false,
  products: [],
  featuredProducts: [],
  singleLoading: false,
  singleProduct: {}
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

  const getSingleProducts = async (url) => {

    dispatch({type: 'SINGLE_LOADING'});
    try {
      let fetchSingleProduct = await axios.get(url);
      let singleProductData = fetchSingleProduct.data;
      dispatch({ type: "SINGLE_PRODUCT", payload: singleProductData });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR"});
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={ { ...state, getSingleProducts } }>
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
