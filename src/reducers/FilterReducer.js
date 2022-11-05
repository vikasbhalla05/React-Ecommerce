const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: action.payload,
        products: action.payload,
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false
      };

    case 'LOAD_SORT_PRODUCTS':
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value : action.payload
      }
      
    default:
      return {...state};
  }
};

export default FilterReducer;
