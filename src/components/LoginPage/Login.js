import React from 'react'
import './Login.css'
import image from '../../images/img2.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { useState } from 'react';

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user,[e.target.name] : value});
    console.log(user);
  }

  const handleSubmit = () => {
      alert(`${user.email} ${user.password}`)
      setUser({
        email: "",
        password: "",
      })
  }

  const handleSeller = () => {
    if(user.email==='admin' && user.password==='12345678'){
      alert("Successfully logged in as Seller!");
    }
    else {
      alert("Authentication unsuccessful!");
    }
    setUser({
      email: "",
      password: "",
    })
  }

  return (
    <div className='login-body-container'>
        <div className='login-form-container'>
          <div>
            <h1>Let's you sign in</h1>
            <h3>Welcome to our Page <Link className='login-link' to = "/signup">SignUp</Link></h3>
          </div>
          <div className='login-form'>
            <input 
              className='login-input' 
              placeholder='Email Address' 
              name='email' 
              value={user.email} 
              onChange={(e) => handleChange(e)} 
              id="standard-basic" 
              type="email" 
              label="Email" 
              autoComplete='off'
            />
            <input 
              className='login-input' 
              placeholder='Password' 
              name='password' 
              value={user.password} 
              onChange={(e) => handleChange(e)} id="standard-basic" 
              type="password" 
              label="Password" 
            />
          </div>
          <div className='login-buttons'>
              <Button className='seller-button-user' onClick={() => handleSubmit() } variant='contained'>Sign In</Button>
              <Button className='seller-button-seller' onClick={() => handleSeller() } variant='contained'>Sign In as Seller</Button>
          </div>
        </div>
        <div className='login-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default Login;