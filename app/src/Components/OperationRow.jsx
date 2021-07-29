/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ArrowLeftIcon, MoneyIcon, TrashIcon } from "../icons";
import { useAuth } from "../Context/AuthContext";
import { editOperation, deleteOperation } from "../services/operationService";

function OperationRow({ operation }) {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  //   prettier-ignore
  const [descriptionValue, setDescriptionValue] = useState(operation.description);
  const [amountValue, setAmountValue] = useState(operation.amount);
  const { currentUser } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const confirmEdit = async operationId => {
    try {
      //   prettier-ignore
      await editOperation(descriptionValue, amountValue, currentUser.token, operationId);
      setEditMode(false);
      history.push(location.pathname);
    } catch (err) {
      throw err;
    }
  };

  const confirmDelete = async operationId => {
    try {
      await deleteOperation(operationId, currentUser.token);
      setDeleteMode(false);
      history.push(location.pathname);
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <tr
        key={operation.operation_id}
        className={`${editMode ? "bg-gray-200" : ""} transition-colors `}>
        <td className='px-6 py-4 '>
          {editMode ? (
            <div className='flex items-center'>
              <MoneyIcon className='h-5 w-5 mr-2 text-gray-600 flex-shrink-0' />
              <input
                type='text'
                className='bg-gray-100 flex-1 text-gray-900 text-base border border-indigo-300 px-3 py-1 rounded-md outline-none appearance-none focus:ring focus:ring-indigo-200'
                value={descriptionValue}
                spellCheck='false'
                onChange={e => setDescriptionValue(e.target.value)}
              />
            </div>
          ) : (
            <div className='text-sm font-medium text-gray-900 flex items-center'>
              <MoneyIcon className='h-4 w-4 mr-2 text-gray-600 flex-shrink-0' />
              {operation.description}
            </div>
          )}
        </td>

        <td className='px-6 py-4 whitespace-nowrap'>
          {editMode ? (
            <div className='text-gray-900 font-medium'>
              $
              <input
                type='number'
                className='bg-gray-100 w-20 ml-2 text-gray-900 text-base border border-indigo-300 px-3 py-1 rounded-md outline-none appearance-none focus:ring focus:ring-indigo-200'
                value={amountValue}
                spellCheck='false'
                onChange={e => setAmountValue(e.target.value)}
              />
            </div>
          ) : (
            <div className='text-sm text-gray-900'>$ {operation.amount}</div>
          )}
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full  ${
              operation.operation_type.toLowerCase() === "income"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            } `}>
            {operation.operation_type.toLowerCase() === "income"
              ? "Ingreso"
              : "Egreso"}
          </span>
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
          {operation.date}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
          <button
            href='#'
            className='text-indigo-600 hover:text-indigo-900 font-medium'
            onClick={() => setEditMode(true)}>
            Editar
          </button>
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-center text-sm font-medium relative '>
          {deleteMode ? (
            <div className='flex justify-center gap-4 absolute items-center top-3 left-8'>
              <button
                className='text-gray-500 hover:text-gray-500 p-1 bg-gray-50 rounded-full hover:bg-gray-200 border hover:border-indigo-500 transition-colors'
                onClick={() => setDeleteMode(false)}>
                <ArrowLeftIcon className='h-5 w-5 ' />
              </button>
              <button
                onClick={() => confirmDelete(operation.operation_id)}
                className='text-red-600 hover:text-red-500 p-1  bg-gray-50 hover:bg-red-100 rounded-full border hover:border-red-700 transition-colors'>
                <TrashIcon className='h-5 w-5 ' />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setDeleteMode(true)}
              className='text-red-600 hover:text-red-900 font-medium'>
              Eliminar
            </button>
          )}
        </td>
      </tr>
      {editMode && (
        <div className='bg-gray-200 w-full flex justify-start gap-2 pb-4 px-6 pl-13 '>
          <button
            className='px-4 py-2 text-sm rounded-lg border border-gray-300 bg-gray-50 font-medium text-gray-800 hover:bg-gray-200 transition-colors'
            onClick={() => setEditMode(false)}>
            Cancelar
          </button>
          <button
            className='px-4 py-2 text-sm rounded-lg border border-gray-300 bg-indigo-600 text-gray-50 hover:bg-indigo-700 transition-colors'
            onClick={() => confirmEdit(operation.operation_id)}>
            Confirmar
          </button>
        </div>
      )}
    </>
  );
}

export default OperationRow;
