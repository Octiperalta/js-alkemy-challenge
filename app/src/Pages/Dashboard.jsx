/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Components/Navigation";
import OverviewCard from "../Components/OverviewCard";
import { BalanceIcon, ClipboardIcon, TimeIcon } from "../icons";

function Dashboard() {
  return (
    <Navigation>
      <Switch>
        <Route exact path='/'>
          <div className='px-8 py-8 relative'>
            <p className='text-xl text-gray-900 font-semibold'>Overview</p>

            <div className='grid grid-cols-1 sm:grid-cols-3 pt-2 gap-3'>
              <OverviewCard
                title='Balance de cuenta'
                amount={"-30659.45"}
                icon={BalanceIcon}
                transaction={true}
              />

              <OverviewCard
                title='Última operacion'
                amount={"300.00"}
                icon={TimeIcon}
                transaction={true}
              />

              <OverviewCard
                title='Cantidad de operaciones'
                amount={"9"}
                icon={ClipboardIcon}
              />
            </div>
          </div>
        </Route>
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
