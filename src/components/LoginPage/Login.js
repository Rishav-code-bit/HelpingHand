import React, { useContext } from "react";
import "./Login.css";
import image from "../../images/img2.png";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import UserService from "../../services/UserService";
import authContext from "../../context/AuthContext";

function Login() {
  const a = useContext(authContext);
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    isLogged: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.getUser(user.email)
      .then((response) => {
        user.name = response.data.name;
        if (response.data.password === user.password) {
          a.setState({
            name: user.name,
            email: user.email,
            isLogged: true,
          });
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
          localStorage.setItem("isLogged", true);
          history.push("/dashboard");
        } else {
          alert("Username or password incorrect!");
        }
      })
      .catch((error) => {
        alert("Username or password incorrect!");
      });
    setUser({
      email: "",
      password: "",
    });
  };

  const isLoggedIn = a.state.isLogged;

  if (isLoggedIn === "true") {
    history.push("/dashboard");
  } else {
    return (
      <div className="login-body-container">
        <div className="login-form-container">
          <div>
            <h1>Let's you sign in</h1>
            <h3>
              Welcome to our Page{" "}
              <Link className="login-link" to="/signup">
                SignUp
              </Link>
            </h3>
          </div>
          <div className="login-form">
            <input
              className="login-input"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
              type="email"
              label="Email"
              autoComplete="email"
            />
            <input
              className="login-input"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              id="standard-basic"
              type="password"
              label="Password"
            />
          </div>
          <div className="login-buttons">
            <Button
              className="seller-button-user"
              onClick={(e) => handleSubmit(e)}
              variant="contained"
            >
              Sign In
            </Button>
          </div>
          <Link
            style={{ textDecoration: "none", color: "aliceblue" }}
            to="/verify"
            className="login-link"
          >
            <h4
              style={{
                marginTop: "-60px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </h4>
          </Link>
        </div>
        <div className="login-image-container">
          <img src={image} alt="SDP3"></img>
        </div>
      </div>
    );
  }
}

export default Login;
