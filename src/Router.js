import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Union from './Union'
import Colon from './Colon'
import Inicio from './Inicio'

import estadioColon from './img/estadio-colon.jpg'
import estadioUnion from './img/estadio-union.jpg'



export default function HaceteSocio() {
  return (
    <Router>
      <div className="navbar-nav bg-dark shadow">
        <ul className="nav d-flex justify-content-around">
          <li className="nav-item p-3">
            <Link to="/hacete-socio-colon" className="text-danger p-2 border border-2 rounded border-danger hover none">COLON</Link>
          </li>
          <li className="nav-item p-3">
            <Link to="/" className="text-light none fw-bold hover-socio">¡HACETE SOCIO!</Link>
          </li>
          <li className="nav-item p-3">
            <Link to="/hacete-socio-union" className="text-danger p-2 border border-2 rounded border-danger bg-white hover none">UNION</Link>
          </li>

        </ul>

        <Switch>
          <Route path="/hacete-socio-colon" >
            <Colon estadio={estadioColon} />
          </Route>
          <Route path="/hacete-socio-union">
            <Union estadio={estadioUnion} />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
