import React from 'react'
import './Login.css'
import image from '../../images/img2.png'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';

function Login() {

  const CssTextField = withStyles({
     root: { 
      '& label.Mui-focused': { color: 'white', },
      '& .MuiInput-underline:after': { borderBottomColor: 'yellow', }, 
      '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white', }, 
      '&:hover fieldset': { borderColor: 'white', }, 
      '&.Mui-focused fieldset': { borderColor: 'yellow', }, }, }, 
  })(TextField);


  return (
    <div className='login-body-container'>
        <div className='login-form-container'>
          <div>
            <h1>Let's you sign in</h1>
            <h3>Welcome to our Page <Link className='login-link' to = "/signup">SignUp</Link></h3>
          </div>
          <div className='login-form'>
            <CssTextField id="standard-basic" type="email" label="Email" variant="outlined" InputLabelProps={{style: {color: 'aliceblue'}}}/>
            <CssTextField className='login-text' id="standard-basic" type="password" label="Password" variant="outlined" InputLabelProps={{style: {color: 'aliceblue'}}} />
          </div>
          <div className='login-buttons'>
              <Button className='seller-button-user' variant='contained'>Sign In</Button>
              <Button className='seller-button-seller' variant='contained'>Sign In as Seller</Button>
          </div>
        </div>
        <div className='login-image-container'>
        <img src={image} alt="SDP3"></img>
        </div>
    </div>
  )
}

export default Login;