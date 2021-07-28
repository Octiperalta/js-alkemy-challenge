import OperationsTable from "./OperationsTable";

const people = [
  {
    description: "Loremasdasdada<dsduas ",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "income",
    date: "July 19, 2017",
  },
];

function Incomes() {
  return (
    <div className='px-8 py-8'>
      <p className='text-xl text-gray-900 font-semibold'>
        Todas tus ingresos
        <div className='mt-3'>
          <OperationsTable data={people} />
        </div>
      </p>
    </div>
  );
}

export default Incomes;
