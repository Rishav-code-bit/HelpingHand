import React, { useState, useContext } from "react";
import "./SignUp.css";
import image from "../../images/img3.png";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import authContext from "../../context/AuthContext";
import UserService from "../../services/UserService";

function ForgotPassword() {
  const a = useContext(authContext);
  const history = useHistory();

  const [password, setPassword] = useState("");

  const isLoggedIn = a.state.isLogged;

  const handleUpdate = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("fpemail");
    UserService.updatePassword(email, password).then((res) => {
      alert("Password updated successfully");
      localStorage.removeItem("fpemail");
      history.push("/login");
    });
  };

  if (isLoggedIn === "true") {
    history.push("/dashboard");
  } else {
    return (
      <div className="signup-body-container">
        <div className="signup-form-container">
          <div style={{ width: "400px", textAlign: "center" }}>
            <h1 style={{ fontSize: "30px" }}>Change your password</h1>
            <h4 style={{ fontSize: "22px" }}>
              Enter new password{" "}
              <Link className="login-link" to="/login">
                SignIn
              </Link>
            </h4>
          </div>
          <form style={{ height: "200px" }} className="signup-form">
            <input
              className="login-input"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              autoComplete="off"
              required
            />
            <Button
              className="seller-button-user"
              type="submit"
              variant="contained"
              onClick={handleUpdate}
            >
              Change Password
            </Button>
          </form>
        </div>
        <div className="signup-image-container">
          <img src={image} alt="SDP3"></img>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
