import React, { useContext, useState, useEffect } from "react";
import "../styles/Home.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { featuredProducts } from "../../../constants/Products";
import authContext from "../../../context/AuthContext";
import FetchProductService from "../../../services/FetchProductService";
import ProductCard from "../../Cards/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  const a = useContext(authContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProductService.getProduct()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

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
        <h3>Featured Product</h3>
        <div className="featured-product">
          {featuredProducts.map((featured) => {
            return (
              <>
                <div className="fp-image">
                  <img src={featured.image} alt={featured.id} />
                </div>
                <div className="fp-text">
                  <h1>{featured.title}</h1>
                  <h5>Sold by {featured.seller}</h5>
                  <h4>Rs. {featured.price}</h4>
                  <MoreVertIcon className="fp-moreverticon" />
                </div>
              </>
            );
          })}
        </div>
        <h3>Products</h3>
        <div className="products-list">
          {products.map((product) => {
            return (
              <>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={{ pathname: "/details/" + product.id }}
                >
                  <ProductCard {...product} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
