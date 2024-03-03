import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  console.log(typeof id, "===>ll", id);
  console.log(typeof Number(id), "===>22");

  const product = all_product.find((e) => e.id === Number(id));
  console.log(product, "===>111");
  console.log(id, "===>productId");

  return (
    <div>
      <Breadcrumbs product={product} ee={'test'}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
