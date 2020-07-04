import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

const routing = (
    <Router>
      <div>
        <Header />      <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
        <Footer />    </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById("root"));
