import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Machinaries from "./Components/Machinaries/Machinaries";

import Premises from "./Components/Premises/Premises";
import RD from "./Components/RD/RD";
import Contact from "./Components/Contact/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Factory from "./Components/Premises/Factory/Factory";
import Office from "./Components/Premises/Office/Office";
import CompanySummary from "./Components/CompanySummary/CompanySummary";
import Managements from "./Components/Managements/Managements";
import Customer from "./Components/Customer/Customer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/Machinaries">
          <Machinaries />
        </Route>
        <Route path="/Customer">
          <Customer />
        </Route>
        <Route path="/Premises">
          <Premises />
        </Route>
        <Route path="/RD">
          <RD />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Office">
          <Office />
        </Route>
        <Route path="/Factory">
          <Factory />
        </Route>
        <Route path="/CompanySummary">
          <CompanySummary />
        </Route>
        <Route path="/Managements">
          <Managements />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
