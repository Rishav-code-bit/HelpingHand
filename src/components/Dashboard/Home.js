import React, { useContext } from 'react'
import './Home.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { products } from '../../constants/Products';
import { featuredProducts } from '../../constants/Products';
import authContext from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';

function Home() {

  const a = useContext(authContext);

  const isLoggedIn = a.state.isLogged;

  const history = useHistory();

  if(!isLoggedIn){
    history.push("/login");
  } else{
    return (
      <div>
        <div className='dash-home-container'>
          <div className='dash-home-navbar'>
              <SearchOutlinedIcon className='SearchOutlinedIcon' />
              <input className='dash-home-searchbar' placeholder='Explore Products' />
          </div>
          <div className='dash-home-title'>
            <AccountCircleIcon />
            <h3>{a.state.email}</h3>
          </div>
        </div>
        <div className='dash-product-section'>
          <h3>Featured Product</h3>
          <div className='featured-product'>
            {featuredProducts.map((featured) => {
              return(
                <>
                  <div className='fp-image'>
                    <img src={featured.image} alt={featured.id} />
                  </div>
                  <div className='fp-text'>
                    <h1>{featured.title}</h1>
                    <h5>Sold by {featured.seller}</h5>
                    <h4>Rs. {featured.price}</h4>
                    <MoreVertIcon className='fp-moreverticon' />
                  </div>
                </>
              )
            })}
          </div>
          <h3>Products</h3>
          <div className='products-list'>
            {products.map((product) => {
              return (
                <div className='product-card'>
                  <img src={product.image} alt={product.id} />
                  <h3>{product.title}</h3>
                  <div className='product-footer'>
                    <h5>By {product.seller}</h5>
                    <h5>Rs. {product.price}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;