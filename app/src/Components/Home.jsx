import React from "react";
import {
  BalanceIcon,
  ChevronDownIcon,
  ClipboardIcon,
  MoneyIcon,
  TimeIcon,
  TrendingUpIcon,
} from "../icons";
import OperationsTable from "./OperationsTable";
import OverviewCard from "./OverviewCard";
const people = [
  {
    description: "Loremasdasdada<dsduas asdasjdasdajsdouihasd asdjiasndasdnas",
    title: "Regional ",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    title: "Regional ",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    title: "Regional ",
    amount: 1000,
    operation_type: "outflow",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    title: "Regional ",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    title: "Regional ",
    amount: 1000,
    operation_type: "outlflow",
    date: "July 19, 2017",
  },
];

function Home() {
  return (
    <div className='px-8 py-8 relative'>
      <div>
        <p className='text-xl text-gray-900 font-semibold'>Resumen</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2 gap-3'>
          <OverviewCard
            title='Balance de cuenta'
            amount={"-30659.45"}
            icon={BalanceIcon}
            transaction={true}
          />

          <OverviewCard
            title='Última operación'
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

      <div className='mt-6'>
        <p className='text-xl text-gray-900 font-semibold'>
          Actividad reciente
        </p>
        <div className='mt-3'>
          <OperationsTable data={people} />
        </div>
      </div>
    </div>
  );
}

export default Home;
