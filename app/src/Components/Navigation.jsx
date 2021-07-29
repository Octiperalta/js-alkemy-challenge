/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import {
  HomeIcon,
  BalanceIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  CogIcon,
  LeaveIcon,
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  MailIcon,
  VerifiedIcon,
  CloseIcon,
} from "../icons";
import Navlink from "./Navlink";

function Navigation({ children }) {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <div className='relative h-screen flex'>
      <button
        className={`absolute bg-black opacity-20 inset-0 w-full h-full select-none cursor-default z-20 ${
          open ? "absolute" : "hidden"
        }`}
        onClick={toggleNavbar}></button>
      {/* sidebar */}
      <div
        className={`bg-gradient-to-t from-indigo-600 z-20 flex-shrink-0 via-indigo-700 to-indigo-800 w-64 text-indigo-100 font-poppins absolute md:relative md:translate-x-0 inset-y-0 left-0 transform  transition duration-200 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='absolute right-3 top-2 md:hidden'>
          <button
            onClick={toggleNavbar}
            className='p-px hover:bg-gray-300 hover:text-indigo-600 rounded-md transition-colors'>
            <CloseIcon className='h-5 w-5' />
          </button>
        </div>
        {/* logo */}
        <a href='' className='flex items-center py-3 px-3'>
          <img
            src='./img/logo-indigo-100.png'
            alt=''
            className='w-10 h-auto transform -rotate-90'
          />
          <h2 className='ml-2 tracking-wide font-bold text-white text-2xl'>
            operawork
          </h2>
        </a>
        {/* nav */}
        <div className='mt-6 text-indigo-200 flex flex-col '>
          <div className='flex flex-col space-y-3 py-3 px-3'>
            {navLink.map(item => (
              <Navlink {...item} onClick={closeNavbar} />
            ))}
          </div>
          <hr className='border border-indigo-600 ' />
          <div className='flex py-3 px-3 flex-col text-indigo-300'>
            <a
              href='#'
              className='block py-2 px-2 rounded-lg text-sm hover:text-gray-50 transition-colors group'>
              <div className='flex item-center'>
                <CogIcon className='w-6 h-6 text-indigo-300 mr-3 group-hover:text-gray-200' />
                <div className='leading-6'>Configuración</div>
              </div>
            </a>
            <Link
              to='#'
              className='block py-2 px-2 rounded-lg text-sm hover:text-gray-50 transition-colors group'
              onClick={logout}>
              <div className='flex item-center'>
                <LeaveIcon className='w-6 h-6 text-indigo-300 mr-3 group-hover:text-gray-200' />
                <div className='leading-6'>Salir</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* content */}
      <div className='bg-gray-200 flex-1 font-poppins flex flex-col relative'>
        {/* header */}
        <div className='flex flex-col bg-gray-50  shadow-md relative z-10'>
          {/* top header */}
          <div className='flex justify-between md:justify-end items-center px-3 sm:mx-8 sm:py-4 border-b border-gray-200 '>
            <button
              onClick={toggleNavbar}
              className='md:hidden border-r sm:p-1 sm:m-0 py-4 px-3 -mx-3 sm:border-0 sm:rounded-full border-gray-200 hover:bg-gray-100 group'>
              <MenuIcon className='h-6 w-6 text-gray-500 group-hover:text-gray-800 transition-colors' />
            </button>

            <div className='flex space-x-5'>
              <button className='hover:bg-gray-100 rounded-full'>
                <BellIcon className='h-6 w-6 text-gray-500 ' />
              </button>
              <button className=' text-sm text-gray-600 font-poppins tracking-tight flex items-center font-semibold '>
                <img
                  src='https://i.pinimg.com/564x/f1/da/a7/f1daa70c9e3343cebd66ac2342d5be3f.jpg'
                  alt=''
                  className='w-7 h-auto rounded-full
                    '
                />
                <div className='hidden sm:flex sm:items-center '>
                  <p className='ml-2'>{currentUser.name}</p>
                  <ChevronDownIcon className='h-4 w-4 text-gray-500 ml-px' />
                </div>
              </button>
            </div>
          </div>
          {/* bottom header */}
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 py-4 px-8'>
            {/* left */}
            <div className='flex items-center space-x-3'>
              <img
                src='https://i.pinimg.com/564x/f1/da/a7/f1daa70c9e3343cebd66ac2342d5be3f.jpg'
                alt=''
                className='w-11 sm:w-9 h-auto rounded-full
                '
              />
              <div className='flex flex-col'>
                <h4 className='font-bold text-xl sm:text-lg text-gray-900 tracking-tight leading-none'>
                  Bienvenido {currentUser.name}!
                </h4>
                <div className='items-center hidden sm:flex'>
                  <MailIcon className='h-4 w-4 text-gray-600 mr-1 ' />
                  <p className='text-sm text-gray-500'>{currentUser.email}</p>
                  <span className='text-gray-400 mx-2'>|</span>
                  <VerifiedIcon className='h-4 w-4 text-green-500 mr-1 ' />
                </div>
              </div>
            </div>

            <div className='sm:hidden flex flex-col space-y-3'>
              <div className='flex item-center'>
                <MailIcon className='h-6 w-6 text-gray-600 mr-2 ' />
                <p className='text-base text-gray-500 font-medium'>
                  {currentUser.email}
                </p>
              </div>
              <div className='flex item-center'>
                <VerifiedIcon className='h-6 w-6 text-green-500 mr-2 ' />
                <p className='text-base text-gray-500 font-medium'>
                  Cuenta Registrada
                </p>
              </div>
            </div>
            {/* right */}
            <div className='flex space-x-4 sm:space-x-2'>
              <Link
                to='/incomes/create'
                className=' block px-3 py-3 sm:p-2 tracking-tight leading-tight text-gray-600 text-base sm:text-sm font-medium border ring-1 ring-black ring-opacity-5  rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring focus:ring-blue-300'>
                Ingresar dinero
              </Link>
              <div>
                <Link
                  to='/outflows/create'
                  className='block px-3 py-3 sm:py-2 tracking-tight leading-tight text-white bg-indigo-500 text-base sm:text-sm border rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring focus:ring-indigo-400'>
                  Enviar dinero
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className='flex-1 overflow-y-auto '>{children}</div>
      </div>
    </div>
  );
}

export default Navigation;

const navLink = [
  {
    linkName: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    linkName: "Operaciones",
    path: "/operations",
    icon: BalanceIcon,
  },
  {
    linkName: "Ingresos",
    path: "/incomes",
    icon: TrendingUpIcon,
  },
  {
    linkName: "Egresos",
    path: "/outflows",
    icon: TrendingDownIcon,
  },
];
