import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/LoginPage/Login';
import SignUp from './components/LoginPage/SignUp';
import about from './components/About/abt';
import sidebar from './components/dashboard/dash';
import LoginService from './services/LoginService';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={about} />
        <Route path="/dashboard" exact component={sidebar} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/loginservice" exact component={LoginService} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
