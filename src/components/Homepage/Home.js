import React, { useContext } from 'react'
import './Home.css'
import Button from '@mui/material/Button'
import image from '../../images/Image.png'
import { Link, useHistory } from 'react-router-dom'
import authContext from '../../context/AuthContext';

function Home() {

  const a = useContext(authContext);
  const history = useHistory();

  const isLoggedIn = a.state.isLogged;

  if(isLoggedIn === "true"){
    history.push("/dashboard");
  } else{
    return (
      <div className='home-container'>
          <div className='home-navbar'>
          <div className="home-navbar-container">
            <div classname='home-title'>
              <h1> </h1>
            </div>
              <div className='home-lists'>
                  <ul>
                      <li>Home</li>
                      <li><a className='link-decoration' href='https://www.linkedin.com/posts/srikoushik13_hey-connections-this-is-a-small-presentation-activity-6991980041685405696-HPYV' target='blank'>About</a></li>
                      <li><a className='link-decoration' href='https://github.com/Rishav-code-bit/HelpingHand' target='blank'>Github</a></li>
                      <li>Contact</li>
                      <li><Link className='link-decoration' to="/login"><Button className='login-button' variant="contained">Login</Button></Link></li>
                      <li><Link className='link-decoration' to="/signup"><Button className='signup-button' variant="contained">Sign Up</Button></Link></li>
                  </ul>
              </div>
          </div>
          </div>
          <div className='home-body-container'>
            <div className='home-image-container'>
              <img src={image} alt="SDP3"></img>
            </div>
            <div className='home-text-container'>
              <h1>PRODUCTS MADE <br/>WITH LOVE</h1>
              <p>Get access to buy handicrafts items crafted by utmost care 
                by the most skilled yet underrated craftsmen of our country. 
                The sell it directly to you without any third party so it 
                gives them a lot of support with the additional benefit of 
                you getting some fabulous items.</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;