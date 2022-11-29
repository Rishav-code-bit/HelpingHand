import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthState from "./context/AuthState";
import ProductDetails from "./components/Details/ProductDetails";
import WishList from "./components/Dashboard/Wishlist";

function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/details/:id" exact component={ProductDetails} />
            <Route path="/wishlist" exact component={WishList} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
