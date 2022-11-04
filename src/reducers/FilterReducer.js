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
    default:
      return state;
  }
};

export default FilterReducer;
