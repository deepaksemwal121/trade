import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Containers/Landing";
import Login from "./Containers/Login";
import Header from "./Components/Header/Header";
import Signup from "./Containers/SignUp";
import Home from './Containers/Home-new'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
