import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const handleLogout = () => {
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("isLogged", false);
    window.location.reload();
  };

  return (
    <div class="navbar-container">
      <div class="navbar-navigation">
        <h1>
          Helping <br /> Hand
        </h1>
        <ul>
          <li>
            <a href="/dashboard">
              <span class="navbar-icon">
                <i class="fa-solid fa-house-user"></i>
              </span>
              <span class="navbar-title">Home</span>
            </a>
          </li>
          <li>
            <a href="/cart">
              <span class="navbar-icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <span class="navbar-title">My Cart</span>
            </a>
          </li>
          <li>
            <a href="/order">
              <span class="navbar-icon">
                <i class="fa-solid fa-list"></i>
              </span>
              <span class="navbar-title">My Orders</span>
            </a>
          </li>
          <li>
            <a href="/wishlist">
              <span class="navbar-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <span class="navbar-title">Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="navbar-icon">
                <i class="fa-solid fa-handshake-angle"></i>
              </span>
              <span class="navbar-title">Support</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="navbar-icon">
                <i class="fa-solid fa-gear"></i>
              </span>
              <span class="navbar-title">Settings</span>
            </a>
          </li>
          <li onClick={handleLogout}>
            <a>
              <span class="navbar-icon">
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
              <span class="navbar-title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
