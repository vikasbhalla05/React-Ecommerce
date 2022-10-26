const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };
      break;
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
      break;
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
      break;
    default:
        return state;
      break;
  }
};

export default productReducer;
