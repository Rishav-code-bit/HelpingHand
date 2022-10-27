import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/LoginPage/Login';
import SignUp from './components/LoginPage/SignUp'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;