import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { getOperations } from "../services/operationService";
import OperationsTable from "./OperationsTable";

function Incomes() {
  const [operations, setOperations] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getOperations(currentUser.token, "income").then(ops => setOperations(ops));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='px-8 py-8'>
        <p className='text-xl text-gray-900 font-semibold'>
          Todos tus ingresos
          <div className='mt-3'>
            <OperationsTable data={operations} />
          </div>
        </p>
      </div>
    </motion.div>
  );
}

export default Incomes;
