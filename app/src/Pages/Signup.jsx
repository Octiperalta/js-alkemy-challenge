import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className='min-h-screen flex items-center justify-center relative px-4'>
      <img
        src='./img/topography.svg'
        alt=''
        className='absolute inset-0 h-full w-full object-cover opacity-40'
      />

      <div className='max-w-sm  md:max-w-xl w-full py-8 px-5 md:px-10 bg-gray-50 relative rounded-lg shadow-lg ring ring-black ring-opacity-5'>
        <div>
          <img
            src='./img/logo-indigo-600.png'
            alt=''
            className='mx-auto h-16 w-auto transform -rotate-90'
          />
          <h2 className='text-center mt-4 text-2xl font-extrabold font-poppins text-gray-900'>
            Registrate con tu cuenta
          </h2>
        </div>
        <form
          action='#'
          className='mt-8 space-y-4 max-w-md mx-auto font-poppins'
          autoComplete='false'>
          <div>
            <label
              htmlFor='email-address'
              className='font-medium text-gray-900'>
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email-address'
              required
              className=' appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
            />
          </div>
          <div>
            <label htmlFor='name' className='font-medium text-gray-900'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              required
              autoComplete='false'
              spellCheck='false'
              className=' appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
            />
          </div>
          <div>
            <label htmlFor='name' className='font-medium text-gray-900'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              required
              className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
            />
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <KeyIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Registrarse
            </button>
          </div>
        </form>

        <p className='text-center mt-4 font-medium text-gray-900'>
          Ya tienes una cuenta?{" "}
          <Link to='/login' className='hover:underline text-indigo-600'>
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

const KeyIcon = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
      />
    </svg>
  );
};
