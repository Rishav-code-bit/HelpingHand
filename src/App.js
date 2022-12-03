import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/LoginPage/SignUp";
import Dashboard from "./components/Dashboard/Home/Dashboard";
import AuthState from "./context/AuthState";
import ProductDetails from "./components/Details/ProductDetails";
import WishList from "./components/Dashboard/Wishlist/Wishlist";
import Cart from "./components/Dashboard/Cart/Cart";
import Order from "./components/Dashboard/Orders/Order";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import Otp from "./components/OTP/Otp";

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
            <Route path="/cart" exact component={Cart} />
            <Route path="/order" exact component={Order} />
            <Route path="/verify" exact component={Otp} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
