import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import WDisplay from "./WDisplay";
import "../styles/Dashboard.css";
import authContext from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const a = useContext(authContext);

  const history = useHistory();

  const isLoggedIn = a.state.isLogged;

  if (isLoggedIn === "false") {
    history.push("/login");
  } else {
    return (
      <div className="dashboard-container">
        <div className="dashboard-navbar">
          <Navbar />
        </div>
        <div className="dashboard-body">
          <WDisplay />
        </div>
      </div>
    );
  }
}

export default Dashboard;
