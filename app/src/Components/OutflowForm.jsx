import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { CloseIcon, DollarIcon, LoaderIcon, PlaneIcon } from "../icons";
import { createOperation } from "../services/operationService";

function Outflow() {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const { token } = currentUser;
    const description = descriptionRef.current.value;
    const amount = amountRef.current.value;
    setLoading(true);
    try {
      await createOperation(description, amount, "outflow", token);
      history.push("/");
    } catch (err) {
      throw err;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -50 }}
      transition={{ duration: 0.3 }}>
      <div className='px-8 py-8'>
        <div className='bg-gray-50 rounded-lg shadow-md flex flex-col overflow-hidden'>
          <div>
            <div className='flex px-5 py-5 items-center border-b border-indigo-500 bg-indigo-500'>
              <div className='bg-gray-50 rounded-full p-2 '>
                <PlaneIcon className='h-6 w-6 text-indigo-600' />
              </div>
              <h5 className='ml-3 text-xl font-medium text-gray-50'>
                Enviar dinero
              </h5>
              <Link
                to='/'
                className='ml-auto hover:bg-gray-200 rounded-full p-1 transition-colors'>
                <CloseIcon className=' h-5 w-5 text-gray-50 hover:text-gray-600' />
              </Link>
            </div>
            <div className='px-5 py-3 mt-3 '>
              <form
                action='#'
                className=''
                autoComplete='false'
                onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div>
                    <label
                      htmlFor='description'
                      className='font-medium text-gray-900 text-lg sm:text-base'>
                      Concepto
                    </label>
                    <input
                      type='text'
                      id='description'
                      required
                      ref={descriptionRef}
                      className='appearance-none rounded-lg relative block w-full px-3 py-3 sm:py-2 border-2 border-indigo-100  text-gray-800 placeholde focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
                      autoComplete='false'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='amount'
                      className='font-medium text-gray-900 text-lg sm:text-base'>
                      Monto a enviar
                    </label>
                    <div className='relative '>
                      <input
                        type='number'
                        id='amount'
                        required
                        ref={amountRef}
                        className='pl-9 appearance-none  rounded-lg relative block w-full px-3 py-3 sm:py-2 border-2 border-indigo-100 bg-white text-gray-800 placeholde focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
                      />
                      <span className='absolute inset-y-0 left-0 flex items-center select-none px-2'>
                        <DollarIcon className='mr-1 h-6 w-6 text-gray-300 ' />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='px-5 py-4 md:flex w-full'>
                  <div className='md:ml-auto flex space-x-3 gap-1 '>
                    <Link
                      to='/'
                      className='px-4 py-3 md:py-2 text-md md:text-base flex-grow border rounded-md font-medium border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors'>
                      Cancelar
                    </Link>
                    <button className='px-4 py-3 md:py-2 text-md md:text-base flex-grow border rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors'>
                      {loading ? (
                        <>
                          <LoaderIcon className='animate-spin -ml-1 mr-3 h-4 w-4 text-white' />
                          Procesando
                        </>
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='px-5 text-center py-4 border-t text-md md:text-base text-gray-500 font-medium bg-gray-100'>
            <p>
              Recuerda que las operaciones pueden ser editadas en la pestaña de{" "}
              <Link to='/operations' className='text-cyan-500 hover:underline'>
                Operaciones
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Outflow;
