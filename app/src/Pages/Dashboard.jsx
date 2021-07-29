/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../Components/Home";
import Navigation from "../Components/Navigation";
import Operations from "../Components/Operations";
import Incomes from "../Components/Incomes";
import Outflows from "../Components/Outflows";
import { AnimatePresence } from "framer-motion";
import IncomeForm from "../Components/IncomeForm";
import OutflowForm from "../Components/OutflowForm";

function Dashboard() {
  const location = useLocation();

  return (
    <Navigation>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Home} />
          <Route exact path='/operations' component={Operations} />
          <Route exact path='/incomes' component={Incomes} />
          <Route exact path='/outflows' component={Outflows} />
          <Route exact path='/incomes/create' component={IncomeForm} />
          <Route exact path='/outflows/create' component={OutflowForm} />
        </Switch>
      </AnimatePresence>
    </Navigation>
  );
}

export default Dashboard;
