import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Machinaries from './Components/Machinaries/Machinaries';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Product">
            <Product></Product>
            </Route>
            <Route path="/Machinaries">
            <Machinaries></Machinaries>
            </Route>
          </Switch>
        </Router>







  );
}

export default App;
