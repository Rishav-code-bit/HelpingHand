import React from "react";
import "../Dashboard/styles/Home.css";
import ProductDetails from "../Details/ProductDetails";

const ProductCard = (product) => {
  return (
    <div className="product-card" onClick={ProductDetails}>
      <img src={product.image} alt={product.id} />
      <h3>{product.title}</h3>
      <div className="product-footer">
        <h5>By {product.seller}</h5>
        <h5>Rs. {product.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
