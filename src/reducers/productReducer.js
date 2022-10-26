const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case "MY_PRODUCTS":
        let featuredProduct = action.payload.filter((ele) => {
            return ele.featured;
        })

      return {
        ...state,
        products: action.payload,
        isLoading: false,
        featuredProducts: featuredProduct,
        isError: false
      };
    default:
        return state;
  }
};

export default productReducer;
