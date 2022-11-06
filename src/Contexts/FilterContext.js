import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/FilterReducer';
import { useProductContext } from "./productContext";

const FilterContext = createContext();
const initialState = {
    filterProducts : [],
    products : [],
    gridView: true,
    sorting_value : "highest"
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        // console.log("SET_GRID_VIEW");
        return dispatch({type: "SET_GRID_VIEW"})
    }

    const setListView = () => {
        // console.log("SET_LIST_VIEW");
        return dispatch({type: "SET_LIST_VIEW"})
    }

    const sorting =(e) => {
        let userValue = e.target.value;
        return dispatch({type : "LOAD_SORT_VALUE", payload : userValue});
    }

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [state.sorting_value, products])
    
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
      }, [products]);
    

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContextProvider, useFilterContext };
