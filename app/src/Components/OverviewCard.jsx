/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LinkIcon, TrendingDownIcon, TrendingUpIcon } from "../icons";

function OverviewCard({ icon: Icon, title, amount, transaction = false }) {
  return (
    <div className='bg-white rounded-md shadow flex flex-col overflow-hidden'>
      <div className='flex justify-bewtween px-4 py-4 '>
        <div className='flex space-x-4'>
          <Icon className='h-8 w-8 text-gray-500' />
          <div>
            <p className='text-gray-600 font-medium text-lg leading-none'>
              {title}
            </p>
            <p className='text-gray-900 font-bold text-xl leading-9'>
              {transaction ? `$ ${amount}` : amount}
            </p>
          </div>
        </div>
        <div className='ml-auto'>
          {transaction ? (
            amount > 0 ? (
              <TrendingUpIcon className='h-6 w-6 text-green-600' />
            ) : (
              <TrendingDownIcon className='h-6 w-6 text-red-600' />
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div className='px-4 py-3 bg-gray-100 '>
        <a
          href='#'
          className='text-cyan-600 font-medium text-md inline-flex items-center hover:underline'>
          Ver más
          <LinkIcon className='ml-1 h-4 w-4 ' />
        </a>
      </div>
    </div>
  );
}

export default OverviewCard;
