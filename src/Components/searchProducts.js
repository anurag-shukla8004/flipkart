import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Homeproduct from "./homeproduct";

function SearchProducts(props) {
  const search = useLocation();
  const ProductData = search.state.update;

  // updateProductData(search);
  console.log(ProductData, "nnn");

  // updateProductData(search);
  return (
    <>
      {ProductData.map((data, index) => (
        <Homeproduct
          id={data.id}
          key={data.id}
          name={data.title}
          image={data.image}
          price={data.price}
          details={data.description}
          category={data.category}
          rating={data.rating}
          count={data.rating}
        />
      ))}
    </>
  );
}

export default SearchProducts;
