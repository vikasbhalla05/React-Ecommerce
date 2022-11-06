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
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "LOAD_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      // console.log(action.payload);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let FilterProducts;
      let {filterProducts, sorting_value} = state;
      let tempFilterProducts = [...filterProducts];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      FilterProducts = tempFilterProducts.sort(sortingProducts);
      console.log(sorting_value);
      return {
        ...state,
        filterProducts: FilterProducts,
      };

    default:
      return { ...state };
  }
};

export default FilterReducer;
