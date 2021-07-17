import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Components/Login";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
