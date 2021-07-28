/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  ChevronDownIcon,
  MoneyIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "../icons";

function OperationsTable({ data: people }) {
  return (
    <>
      <div className='flex-col hidden lg:flex'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Concepto
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Monto
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Tipo
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Fecha
                    </th>
                    <th className='relative px-6 py-3'></th>
                    <th className='relative px-6 py-3'></th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {people.map(person => (
                    <tr>
                      <td className='px-6 py-4 '>
                        <div className='text-sm font-medium text-gray-900 flex items-center'>
                          <MoneyIcon className='h-4 w-4 mr-2 text-gray-600 flex-shrink-0' />
                          {person.description}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          $ {person.amount}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full  ${
                            person.operation_type.toLowerCase() === "income"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          } `}>
                          {person.operation_type.toLowerCase() === "income"
                            ? "Ingreso"
                            : "Egreso"}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {person.date}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'>
                          Editar
                        </a>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a href='#' className='text-red-600 hover:text-red-900'>
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col space-y-1 lg:hidden'>
        {people.map(o => (
          <div className='-mx-8 sm:mx-0 px-8 py-4 bg-white sm:rounded-md shadow '>
            <div className='flex space-x-3'>
              {o.operation_type.toLowerCase() === "income" ? (
                <TrendingUpIcon className='w-6 h-6 text-green-500' />
              ) : (
                <TrendingDownIcon className='w-6 h-6 text-red-500' />
              )}

              <div className='flex items-center justify-between w-full'>
                <div>
                  <p className='text-base text-gray-500 font-medium'>
                    {o.description}
                  </p>
                  <p className='text-base font-semibold text-gray-900'>
                    $ {o.amount}
                  </p>
                  <p className='text-base text-gray-500 font-medium'>
                    {o.date}
                  </p>
                </div>
                <button>
                  <ChevronDownIcon className='w-5 h-5 transform text-gray-500 -rotate-90' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OperationsTable;
