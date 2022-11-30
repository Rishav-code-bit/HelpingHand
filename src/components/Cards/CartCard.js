import React from "react";
import "./CartCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CartService from "../../services/CartService";

const CartCard = (product) => {
  const handleDelete = () => {
    CartService.deleteProduct(product.cid).then((res) => {
      window.location.reload();
    });
  };
  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={product.image} alt="product" />
      </div>
      <div className="cart-card-details">
        <h3>{product.title}</h3>
        <h4> Rs. {product.price}</h4>
      </div>
      <div className="cart-card-button">
        <DeleteIcon
          sx={{
            color: "rgb(131, 50, 50)",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default CartCard;
