import React from 'react'
import './Login.css'
import image from '../../images/img2.png'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

function Login() {
  return (
    <div className='login-body-container'>
        <div className='login-form-container'>
        <h1>Let's you sign in</h1>
        <h3>Welcome to our Page <Link to = "/signup">SignUp</Link></h3>
        <div className='login-form'>
        <TextField id="standard-basic" type="email" label="Email" variant="outlined" />
        <TextField id="standard-basic" type="password" label="Password" variant="outlined" />
        </div>
        </div>
        <div className='login-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default Login;