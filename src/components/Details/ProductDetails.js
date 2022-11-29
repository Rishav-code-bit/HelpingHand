import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import authContext from "../../context/AuthContext";
import Navbar from "../Dashboard/Navbar/Navbar";
import "./ProductDetails.css";
import FetchProductByID from "../../services/FetchProductByID";
import { Button } from "@mui/material";
import WishlistService from "../../services/WishlistService";

const ProductDetails = () => {
  const history = useHistory();

  const a = useContext(authContext);

  const { id } = useParams();

  const isLoggedIn = a.state.isLogged;

  const [products, setProducts] = useState([]);

  const [wishlist, setWishlist] = useState({
    id: 0,
    email: a.state.email,
    title: "",
    price: "",
    image: "",
    seller: "",
    description: "",
  });

  useEffect(() => {
    setWishlist({
      id: products.id,
      email: a.state.email,
      title: products.title,
      price: products.price,
      image: products.image,
      seller: products.seller,
      description: products.description,
    });
  }, [products, a]);

  const handleWishlist = (e) => {
    e.preventDefault();
    WishlistService.saveProduct(wishlist)
      .then((response) => {
        if (response == null) {
          alert("Product already in wishlist");
        } else {
          alert("Product Added to wishlist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    FetchProductByID.getProduct(id)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (isLoggedIn === "false") {
    history.push("/login");
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Navbar />
        <div className="pd-home-container">
          <div className="pd-home-navbar">
            <SearchOutlinedIcon className="SearchOutlinedIcon" />
            <input
              className="pd-home-searchbar"
              placeholder="Explore Products"
            />
          </div>
          <div className="pd-home-title">
            <AccountCircleIcon />
            <h3>{a.state.name}</h3>
          </div>
        </div>
        <div className="details-container">
          <h3>Continue Browsing</h3>
          <div className="details-card">
            <div className="details-card-left">
              <img src={products.image} alt="product" />
              <Button
                sx={{ backgroundColor: "#e969a1", width: "250px" }}
                variant="contained"
              >
                Add to Cart
              </Button>
              <Button
                sx={{
                  backgroundColor: "#43c20f",
                  width: "250px",
                }}
                variant="contained"
                onClick={handleWishlist}
              >
                Wishlist
              </Button>
            </div>
            <div className="details-card-right">
              <div className="details-card-title">{products.title}</div>
              <div className="details-card-seller">
                Sold by {products.seller}
              </div>
              <div className="details-card-price">₹ {products.price}</div>
              <div className="details-card-description">
                {products.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
