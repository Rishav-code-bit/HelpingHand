import React, { useState } from 'react'
import './SignUp.css'
import image from '../../images/img3.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import UserService from '../../services/UserService';

function SignUp() {

    const [user, setUser] = useState({
      name: "", 
      phone: "",
      email: "",
      password: "",
    });
  
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user,[e.target.name] : value});
    console.log(user);
  }

  const saveUser = (e) => {
    e.preventDefault();
    UserService.saveUser(user)
      .then((response) => {
        alert("User is successfully registered");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='signup-body-container'>
        <div className='signup-form-container'>
          <div>
            <h1>Signup to our app</h1>
            <h3>Welcome to our Page <Link className='login-link' to = "/login">SignIn</Link></h3>
          </div>
          <div className='signup-form'>
            <input 
              className='login-input' 
              placeholder='Full Name' 
              name='name' 
              value={user.name} 
              onChange={(e) => handleChange(e)} 
              type="name" 
              label="Full Name" 
              autoComplete='off'
            />
            <input 
              className='login-input' 
              placeholder='Phone Number' 
              name='phone' 
              value={user.phone} 
              onChange={(e) => handleChange(e)} 
              type="phonenumber" 
              label="Phone Number" 
              autoComplete='off'
            />
            <input 
              className='login-input' 
              placeholder='Email Address' 
              name='email' 
              value={user.email} 
              onChange={(e) => handleChange(e)} 
              type="email" 
              label="Email" 
              autoComplete='off'
            />
            <input 
              className='login-input' 
              placeholder='Password' 
              name='password' 
              value={user.password} 
              onChange={(e) => handleChange(e)} 
              type="password" 
              label="Password" 
              autoComplete='off'
            />
          </div>
          <div className='signup-buttons'>
              <Button className='seller-button-user' onClick={saveUser} variant='contained'>Sign Up</Button>
              <Button className='seller-button-seller' variant='contained'>Sign Up as Seller</Button>
          </div>
        </div>
        <div className='signup-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default SignUp;