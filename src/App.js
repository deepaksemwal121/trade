import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Containers/Landing";
import Login from "./Containers/Login";
import Header from "./Components/Header/Header";
import Signup from "./Containers/SignUp";
import Home from "./Containers/Home";
import Chat from "./Containers/Chat";
import { Provider } from "react-redux";
import { Persistor, Store } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import Market from "./Components/Market";

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/landing">
                <Landing />
              </Route>
              <Route exact path="/market">
                <Market />
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
              <Route exact path="/chat">
                <Chat />
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
