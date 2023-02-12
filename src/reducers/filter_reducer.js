import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filter_products: [...action.payload],
      fillters: { ...state.fillters, max_price: maxPrice, price: maxPrice },
    };
  }
  // Grid or ListViews
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  //
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  // Sort products
  if (action.type === SORT_PRODUCTS) {
    const { sort, filter_products } = state;
    let tempProducts = [...filter_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filter_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return {
      ...state,
      fillters: {
        ...state.fillters,
        [name]: value,
      },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.fillters;
    let tempProduct = [...all_products];
    //  Filltering
    // text
    if (text) {
      tempProduct = tempProduct.filter((item) => {
        return item.name.toLowerCase().startsWith(text);
      });
    }
    // Category
    if (category !== "all") {
      tempProduct = tempProduct.filter((item) => item.category === category);
    }
    // Company
    if (company !== "all") {
      tempProduct = tempProduct.filter((item) => item.company === company);
    }
    // Colors
    if (color !== "all") {
      tempProduct = tempProduct.filter((item) => {
        return item.colors.find((c) => c === color);
      });
    }
    // Price
    tempProduct = tempProduct.filter((item) => item.price <= price);
    // Shipping
    if (shipping) {
      tempProduct = tempProduct.filter((item) => item.shipping === true);
    }

    return { ...state, filter_products: tempProduct };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      fillters: {
        ...state.fillters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.fillters.max_price,
        shipping: false,
      },
    };
  }
  //
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
