import React, { useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import authContext from '../../context/AuthContext';
import Navbar from '../Dashboard/Navbar';
import './ProductDetails.css';

const ProductDetails = () => {

  const history = useHistory();

  const a = useContext(authContext);

  const { id }  = useParams();

  const isLoggedIn = a.state.isLogged;

  if(isLoggedIn === "false"){
    history.push("/login");
  } else{
    return (
      <div style={ {display: 'flex'}}>
        <Navbar />
        <div className='pd-home-container'>
          <div className='pd-home-navbar'>
              <SearchOutlinedIcon className='SearchOutlinedIcon' />
              <input className='pd-home-searchbar' placeholder='Explore Products' />
          </div>
          <div className='pd-home-title'>
            <AccountCircleIcon />
            <h3>{a.state.name}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;