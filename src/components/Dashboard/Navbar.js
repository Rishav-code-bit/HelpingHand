import React from 'react';
import './Navbar.css';

function Navbar() {

const handleLogout  = () => {
    localStorage.setItem('name', "");
    localStorage.setItem('email', "");
    localStorage.setItem('isLogged', false);
    window.location.reload(false);
}

  return (
    <div class="navbar-container">
        <div class="navbar-navigation">
            <h1>Helping <br /> Hand</h1>
            <ul>
                <li>
                    <a href="#">
                        <span class="navbar-icon"><i class="fa-solid fa-house-user"></i></span>
                        <span class="navbar-title">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="navbar-icon"><i class="fa-solid fa-user"></i></span>
                        <span class="navbar-title">My Orders</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="navbar-icon"><i class="fa-solid fa-message"></i></span>
                        <span class="navbar-title">Wishlist</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="navbar-icon"><i class="fa-solid fa-handshake-angle"></i></span>
                        <span class="navbar-title">Support</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="navbar-icon"><i class="fa-solid fa-gear"></i></span>
                        <span class="navbar-title">Settings</span>
                    </a>
                </li>
                <li onClick={handleLogout}>
                    <a>
                        <span class="navbar-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
                        <span class="navbar-title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;