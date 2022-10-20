import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Login from './components/LoginPage/Login';
import SignUp from './components/LoginPage/SignUp'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
