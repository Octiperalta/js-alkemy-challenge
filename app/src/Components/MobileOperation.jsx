import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import {
  ChevronDownIcon,
  CloseIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "../icons";
import { deleteOperation, editOperation } from "../services/operationService";

function MobileOperation({ operation }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [descriptionValue, setDescriptionValue] = useState(
    operation.description
  );
  const [amountValue, setAmountValue] = useState(operation.amount);

  const handleSubmit = async (e, operationId) => {
    e.preventDefault();
    try {
      //   prettier-ignore
      await editOperation(descriptionValue, amountValue, currentUser.token, operationId);
      setEditMode(false);
      setOpenMenu(false);
      history.push(location.pathname);
    } catch (err) {
      throw err;
    }
  };

  const confirmDelete = async operationId => {
    try {
      await deleteOperation(operationId, currentUser.token);
      setOpenMenu(false);
      history.push(location.pathname);
    } catch (err) {
      throw err;
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className='-mx-8 sm:mx-0 px-8 py-4 bg-white sm:rounded-md shadow overflow-hidden '
      key={operation.operation_id}>
      {editMode ? (
        <form
          action='#'
          className='relative'
          onSubmit={e => handleSubmit(e, operation.operation_id)}>
          <button
            type='button'
            className='absolute top-1 right-0 text-gray-600 hover:text-gray-800'
            onClick={() => setEditMode(false)}>
            <CloseIcon className='h-5 w-6 ' />
          </button>
          <div className=' sm:rounded-md'>
            <div className='py-5 bg-white'>
              <p className='text-xl font-medium text-gray-800'>
                Edite la operación
              </p>
              <div className='grid grid-cols-6 gap-6 mt-4'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='description'
                    className='block text-base sm:text-sm font-medium text-gray-700'>
                    Concepto
                  </label>
                  <input
                    type='text'
                    name='description'
                    id='description'
                    required
                    value={descriptionValue}
                    onChange={e => setDescriptionValue(e.target.value)}
                    className='mt-1 appearance-none focus:outline-none focus:ring-indigo-400 focus:ring focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100 border px-3 py-1 '
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium text-gray-700'>
                    Monto
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <span className='text-gray-500 sm:text-sm'>$</span>
                    </div>
                    <input
                      type='text'
                      name='price'
                      id='price'
                      required
                      value={amountValue}
                      onChange={e => setAmountValue(e.target.value)}
                      className='mt-1 appearance-none  pl-7 pr-12 focus:outline-none focus:ring-indigo-400 focus:ring focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100 border px-3 py-1 '
                      placeholder='0.00'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=' -mx-8 -my-4 bg-gray-100 text-right sm:px-6 mt-1'>
              <div className='px-2 py-3 '>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className='flex space-x-3'>
          {operation.operation_type.toLowerCase() === "income" ? (
            <TrendingUpIcon className='w-6 h-6 text-green-500 flex-shrink-0' />
          ) : (
            <TrendingDownIcon className='w-6 h-6 text-red-500 flex-shrink-0' />
          )}
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-base text-gray-500 font-medium leading-none'>
                {operation.description}
              </p>
              <p className='text-base font-semibold text-gray-900'>
                $ {operation.amount}
              </p>
              <p className='text-base text-gray-500 font-medium'>
                {operation.date}
              </p>
            </div>
            <button className='h-full' onClick={toggleMenu}>
              <ChevronDownIcon className='w-5 h-5 transform text-gray-500 -rotate-90' />
            </button>
          </div>

          <div
            className={` w-20 flex-col justify-center items-center gap-2 transform origin-right ${
              openMenu ? "flex" : "hidden"
            } transition-transform duration-1000`}>
            <button
              className='inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setEditMode(true)}>
              Editar
            </button>

            <button
              onClick={() => confirmDelete(operation.operation_id)}
              className='inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileOperation;
