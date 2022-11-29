import React from "react";
import "../Dashboard/Home.css";
import ProductDetails from "../Details/ProductDetails";
import ClearIcon from "@mui/icons-material/Clear";
import WishlistService from "../../services/WishlistService";

const WishlistCard = (product) => {
  const handleDelete = () => {
    WishlistService.deleteProduct(product.wid).then((res) => {
      window.location.href = "/wishlist";
    });
  };

  return (
    <div className="product-card" onClick={ProductDetails}>
      <div style={{ width: "40px", float: "right" }} onClick={handleDelete}>
        <div style={{ position: "fixed", paddingTop: "10px" }}>
          <ClearIcon sx={{ color: "red" }} />
        </div>
      </div>
      <img src={product.image} alt={product.id} />
      <h3>{product.title}</h3>
      <div className="product-footer">
        <h5>By {product.seller}</h5>
        <h5>Rs. {product.price}</h5>
      </div>
    </div>
  );
};

export default WishlistCard;
