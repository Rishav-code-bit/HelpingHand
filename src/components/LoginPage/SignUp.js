import React from 'react'
import './SignUp.css'
import image from '../../images/img3.png'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';

function SignUp() {
  return (
    <div className='signup-body-container'>
        <div className='signup-form-container'>
          <div>
            <h1>Signup to our app</h1>
            <h3>Welcome to our Page <Link className='login-link' to = "/login">SignIn</Link></h3>
          </div>
          <div className='signup-form'>
            <TextField id="standard-basic" type="name" label="Full Name" variant="outlined" />
            <TextField id="standard-basic" type="phonenumber" label="Phone Number" variant="outlined" />
            <TextField id="standard-basic" type="email" label="Email" variant="outlined" />
            <TextField className='login-text' id="standard-basic" type="password" label="Password" variant="outlined" />
          </div>
          <div className='signup-buttons'>
              <Button variant='contained'>Sign In</Button>
              <Button variant='contained'>Sign In as Seller</Button>
          </div>
        </div>
        <div className='signup-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default SignUp;