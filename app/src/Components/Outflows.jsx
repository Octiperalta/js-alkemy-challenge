import OperationsTable from "./OperationsTable";

const people = [
  {
    description: "Loremasdasdada<dsduas ",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
  {
    description: "Jane Cooper",
    amount: 1000,
    operation_type: "outflows",
    date: "July 19, 2017",
  },
];

function Outflows() {
  return (
    <div className='px-8 py-8'>
      <p className='text-xl text-gray-900 font-semibold'>
        Todos tus egresos
        <div className='mt-3'>
          <OperationsTable data={people} />
        </div>
      </p>
    </div>
  );
}

export default Outflows;
