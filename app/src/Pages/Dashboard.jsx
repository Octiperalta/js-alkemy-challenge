/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Navigation from "../Components/Navigation";

function Dashboard() {
  return (
    <Navigation>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/operations'>
          Operaciones
        </Route>
        <Route exact path='/incomes'>
          Ingresos
        </Route>
        <Route exact path='/outflows'>
          Egresos
        </Route>
      </Switch>
    </Navigation>
  );
}

export default Dashboard;
