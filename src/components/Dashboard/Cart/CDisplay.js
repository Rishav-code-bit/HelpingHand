import React, { useContext, useState, useEffect } from "react";
import "../styles/Home.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import authContext from "../../../context/AuthContext";
import CartCard from "../../Cards/CartCard";
import CartService from "../../../services/CartService";
import { Button } from "@mui/material";
import OrderService from "../../../services/OrderService";

function CDisplay() {
  const a = useContext(authContext);

  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState(0);
  const [discount, setDiscount] = useState(199);

  const handleCheckout = () => {
    OrderService.saveOrder(a.state.email)
      .then((res) => {
        alert("Order Placed Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    CartService.getProduct(a.state.email)
      .then((res) => {
        setProducts(res.data);
        if (res.data.length === 0) {
          setDiscount(0);
        }
      })
      .catch((err) => console.log(err));
  }, [a.state.email]);

  useEffect(() => {
    CartService.getSum(a.state.email)
      .then((res) => setSum(res.data))
      .catch((err) => console.log(err));
  }, [sum]);

  return (
    <div>
      <div className="dash-home-container">
        <div className="dash-home-navbar">
          <SearchOutlinedIcon className="SearchOutlinedIcon" />
          <input
            className="dash-home-searchbar"
            placeholder="Explore Products"
          />
        </div>
        <div className="dash-home-title">
          <AccountCircleIcon />
          <h3>{a.state.name}</h3>
        </div>
      </div>
      <div className="cart-product-section">
        <div>
          <h3>Your Cart</h3>
          <div className="cart-list">
            {products.map((product) => {
              return (
                <>
                  <CartCard {...product} />
                </>
              );
            })}
          </div>
        </div>
        <div className="cart-total-section">
          <h3>Cart Total</h3>
          <div className="cart-total">
            <div className="cart-total-details">
              <h4>Price : </h4>
              <h4>Rs. {sum} </h4>
            </div>
            <div className="cart-total-details">
              <h4>Discount : </h4>
              <h4 style={{ color: "rgb(56, 164, 56)" }}>Rs. {discount} </h4>
            </div>
            <div className="cart-total-details">
              <h4>Delivery Charge : </h4>
              <h4 style={{ color: "rgb(56, 164, 56)" }}>FREE</h4>
            </div>
            <div className="cart-total-line" />
            <div className="cart-total-amount">
              <h4>Total Amount : </h4>
              <h4>Rs. {sum - discount}</h4>
            </div>
            <div className="cart-total-button">
              <Button
                variant="contained"
                sx={{ width: "150px", backgroundColor: "rgb(56, 164, 56)" }}
                onClick={handleCheckout}
              >
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CDisplay;
