import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import authContext from "../../context/AuthContext";
import WishlistCard from "../Cards/WishlistCard";
import WishlistService from "../../services/WishlistService";
import { Link } from "react-router-dom";

function WDisplay() {
  const a = useContext(authContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    WishlistService.getProduct(a.state.email)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [a.state.email]);

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
      <div className="dash-product-section">
        <h3>Your Wishlist</h3>
        <div className="products-list">
          {products.map((product) => {
            return (
              <>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={{ pathname: "/details/" + product.id }}
                >
                  <WishlistCard {...product} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WDisplay;
