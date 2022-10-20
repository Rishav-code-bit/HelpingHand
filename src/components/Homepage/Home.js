import React from 'react'
import './Home.css'
import Button from '@mui/material/Button'

function Home() {
  return (
    <div className='home-container'>
        <div className='home-navbar'>
        <div className="home-navbar-container">
          <div classname='home-title'>
            <h1>SDP App</h1>
          </div>
            <div className='home-lists'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Github</li>
                    <li>Contact</li>
                    <li><Button className='login-button' variant="contained">Login</Button></li>
                    <li><Button className='signup-button' variant="contained">Sign Up</Button></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home;