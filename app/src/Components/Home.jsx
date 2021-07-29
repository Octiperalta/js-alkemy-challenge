import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BalanceIcon, ClipboardIcon, TimeIcon } from "../icons";
import OperationsTable from "./OperationsTable";
import OverviewCard from "./OverviewCard";
import { useAuth } from "../Context/AuthContext";
import {
  getBalance,
  getLastOperation,
  getOperations,
} from "../services/operationService";
import { useLocation } from "react-router-dom";

function Home() {
  const [operations, setOperations] = useState([]);
  const { currentUser } = useAuth();
  const operationsQuantity = operations.length;
  const lastOperation =
    operations.length > 0 ? getLastOperation(operations) : 0;
  const operationsBalance = getBalance(operations);
  const location = useLocation();

  useEffect(() => {
    getOperations(currentUser.token).then(ops => setOperations(ops));
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='px-8 py-8 relative'>
        <div>
          <p className='text-xl text-gray-900 font-semibold'>Resumen</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2 gap-3'>
            <OverviewCard
              title='Balance de cuenta'
              amount={operationsBalance}
              icon={BalanceIcon}
              transaction={true}
            />

            <OverviewCard
              title='Última operación'
              amount={lastOperation}
              icon={TimeIcon}
              transaction={true}
            />

            <OverviewCard
              title='Cantidad de operaciones'
              amount={operationsQuantity}
              icon={ClipboardIcon}
            />
          </div>
        </div>

        <div className='mt-6'>
          <p className='text-xl text-gray-900 font-semibold flex items-center leading-none'>
            Actividad reciente{" "}
            <span className='hidden sm:block ml-3 text-gray-500 text-lg font-medium sm:text-base tracking-tight leading-none'>
              10 últimas operaciones
            </span>
          </p>
          <div className='mt-3'>
            <OperationsTable data={operations.slice(0, 10)} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
