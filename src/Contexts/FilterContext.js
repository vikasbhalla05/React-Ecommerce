import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/FilterReducer';
import { useProductContext } from "./productContext";

const FilterContext = createContext();
const initialState = {
    filterProducts : [],
    products : [],
    gridView: true,
    sorting_value : "highest",
    filters : {
        text : ""
    }
}

const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    // setting view
    const setGridView = () => {
        // console.log("SET_GRID_VIEW");
        return dispatch({type: "SET_GRID_VIEW"})
    }

    const setListView = () => {
        // console.log("SET_LIST_VIEW");
        return dispatch({type: "SET_LIST_VIEW"})
    }

    // sorting
    const sorting =(e) => {
        let userValue = e.target.value;
        return dispatch({type : "LOAD_SORT_VALUE", payload : userValue});
    }

    // search function
    const updateFiltersValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.table({name, value});
        return dispatch({type: "CHANGE_SEARCH_BOX_VALUE", payload: {name, value}});
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS"});
        
    }, [state.filters, state.sorting_value, products])
    
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
      }, [products, state.sorting_value]);
    

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFiltersValue}}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContextProvider, useFilterContext };
