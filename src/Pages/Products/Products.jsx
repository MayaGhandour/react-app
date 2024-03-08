import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Route, Routes, useParams } from "react-router-dom";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox/DescriptionBox";
import RelatedProuduct from "../../Components/RelatedProuduct/RelatedProuduct";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProuduct />
    </div>
  );
};

export default Products;
