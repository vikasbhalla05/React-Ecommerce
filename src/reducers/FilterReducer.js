const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: action.payload,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
