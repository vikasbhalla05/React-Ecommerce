import { useContext } from "react";
import { createContext, useReducer, useEffect } from "react";
import reducer from '../reducers/FilterReducer'
import { useProductContext } from "./productContext";

const FilterContext = createContext();
const initialState = {
    filterProducts : [],
    products : []
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      }, [products]);
    

    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterContextProvider, useFilterContext};