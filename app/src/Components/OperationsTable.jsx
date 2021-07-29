/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ChevronDownIcon, TrendingDownIcon, TrendingUpIcon } from "../icons";
import OperationRow from "./OperationRow";
import { Transition } from "@headlessui/react";
import MobileOperation from "./MobileOperation";

function OperationsTable({ data: operations }) {
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
                  {operations.map((op, index) => (
                    <OperationRow operation={op} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col space-y-1 lg:hidden'>
        {operations.length > 0 ? (
          operations.map(o => <MobileOperation operation={o} />)
        ) : (
          <div className='flex justify-center text-gray-300 tracking-wider font-semibold uppercase text-xl'>
            Sin registros
          </div>
        )}
      </div>
    </>
  );
}

export default OperationsTable;
