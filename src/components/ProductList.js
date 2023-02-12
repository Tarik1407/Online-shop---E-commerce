import React from "react";
import { FilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products: products, grid_view: grid } = React.useContext(
    FilterContext
  );
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products match your search...
      </h5>
    );
  }
  if (!grid) return <ListView products={products} />;

  return <GridView products={products}></GridView>;
};

export default ProductList;
