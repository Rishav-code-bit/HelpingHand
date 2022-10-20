import React, { useState } from 'react'
import './SignUp.css'
import image from '../../images/img3.png'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Alert, Button } from '@mui/material';
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
        console.log(response);
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
            <TextField name='name' value={user.name} onChange={(e) => handleChange(e)} id="standard-basic" type="name" label="Full Name" variant="outlined" />
            <TextField name='phone' value={user.phone} onChange={(e) => handleChange(e)} id="standard-basic" type="phonenumber" label="Phone Number" variant="outlined" />
            <TextField name='email' value={user.email} onChange={(e) => handleChange(e)} id="standard-basic" type="email" label="Email" variant="outlined" />
            <TextField name='password' value={user.password} onChange={(e) => handleChange(e)} id="standard-basic" type="password" label="Password" variant="outlined" />
          </div>
          <div className='signup-buttons'>
              <Button onClick={saveUser} variant='contained'>Sign Up</Button>
              <Button variant='contained'>Sign Up as Seller</Button>
          </div>
        </div>
        <div className='signup-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default SignUp;