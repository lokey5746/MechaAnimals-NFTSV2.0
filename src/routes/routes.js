import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import RouteChangeTracker from "../components/RouteChangeTracker";

//

import Mint from "../pages/Mint";
import Dao from "../pages/Dao";
import Series from "../pages/Series";

function routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/mint">
          <Mint />
        </Route>
        <Route path="/dao">
          <Dao />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
      </Switch>
      <RouteChangeTracker />
      <Footer />
    </Router>
  );
}

export default routes;
