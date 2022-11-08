import React, { useState, useContext } from 'react'
import './SignUp.css'
import image from '../../images/img3.png'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@mui/material';
import UserService from '../../services/UserService';
import authContext from '../../context/AuthContext';

function SignUp() {

  const a = useContext(authContext);
  const history = useHistory();

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

  const isLoggedIn = a.state.isLogged;

  if(isLoggedIn === "true"){
    history.push("/dashboard");
  } else{
    return (
      <div className='signup-body-container'>
          <div className='signup-form-container'>
            <div>
              <h1>Signup to our app</h1>
              <h3>Welcome to our Page <Link className='login-link' to = "/login">SignIn</Link></h3>
            </div>
            <form onSubmit={saveUser} className='signup-form'>
              <input 
                className='login-input' 
                placeholder='Full Name' 
                name='name' 
                value={user.name} 
                onChange={(e) => handleChange(e)} 
                type="name" 
                label="Full Name" 
                autoComplete='off'
                required
              />
              <input 
                className='login-input' 
                placeholder='Phone Number' 
                pattern="[6-9]{1}[0-9]{9}"
                name='phone' 
                value={user.phone} 
                onChange={(e) => handleChange(e)} 
                type="phonenumber" 
                label="Phone Number" 
                autoComplete='off'
                required
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
                required
              />
              <input 
                className='login-input' 
                placeholder='Password' 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                name='password' 
                value={user.password} 
                onChange={(e) => handleChange(e)} 
                type="password" 
                label="Password" 
                autoComplete='off'
                required
              />
              <Button className='seller-button-user' type='submit' variant='contained'>Sign Up</Button>
            </form>
          </div>
          <div className='signup-image-container'>
          <img src={image} alt="SDP3"></img>
          </div>
      </div>
    )
  }
}

export default SignUp;