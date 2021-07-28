/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import Navigation from "../Components/Navigation";
import Operations from "../Components/Operations";
import Incomes from "../Components/Incomes";
import Outflows from "../Components/Outflows";
import PrivateRoute from "../Components/PrivateRoute";

function Dashboard() {
  return (
    <Navigation>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/operations' component={Operations} />
        <Route exact path='/incomes' component={Incomes} />
        <Route exact path='/outflows' component={Outflows} />
      </Switch>
    </Navigation>
  );
}

export default Dashboard;
