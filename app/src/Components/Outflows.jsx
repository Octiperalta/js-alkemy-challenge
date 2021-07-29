import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { getOperations } from "../services/operationService";
import OperationsTable from "./OperationsTable";

function Outflows() {
  const [operations, setOperations] = useState([]);
  const { currentUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    getOperations(currentUser.token, "outflow").then(ops => setOperations(ops));
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className='px-8 py-8'>
        <p className='text-xl text-gray-900 font-semibold'>
          Todos tus egresos
          <div className='mt-3'>
            <OperationsTable data={operations} />
          </div>
        </p>
      </div>
    </motion.div>
  );
}

export default Outflows;
