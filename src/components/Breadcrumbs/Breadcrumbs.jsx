import React from "react";
import "./Breadcrumbs.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrumbs = (props) => {
  const { product } = props;
const {ee}=props;
console.log(ee,'=======>test');
console.log(props,'iiiiiiiiiiii');
console.log(props.ee,'====>"ee" for test')

  return (
    <div className="breadcrumbs">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {/* {product?.category != undefined ? product.category : "not found category"} */}
      {product?.category ?? "not found category"}
      <img src={arrow_icon} alt="" />
      {product?.name ?? "not found name"}
    </div>
  );
};

export default Breadcrumbs;
