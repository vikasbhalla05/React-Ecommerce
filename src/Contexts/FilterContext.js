import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/FilterReducer';
import { useProductContext } from "./productContext";

const FilterContext = createContext();
const initialState = {
    filterProducts : [],
    products : [],
    gridView: false
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        dispatch({type: "SET_GRID_VIEW"})
    }

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

export { FilterContextProvider, useFilterContext };
