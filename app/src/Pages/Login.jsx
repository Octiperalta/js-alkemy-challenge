import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center relative py-12 px-4'>
      <img
        src='./img/formal-invitation.svg'
        alt=''
        className='absolute inset-0 h-full w-full object-cover opacity-40'
      />

      <div className='max-w-sm  md:max-w-xl w-full py-4 px-5 md:px-10 bg-gray-50 relative rounded-lg shadow-lg ring ring-black ring-opacity-5'>
        <div>
          <img
            src='./img/logo-indigo-600.png'
            alt=''
            className='mx-auto h-16 w-auto transform -rotate-90'
          />
          <h2 className='text-center mt-4 text-2xl font-extrabold font-poppins text-gray-900'>
            Incia sesión con tu cuenta
          </h2>
        </div>
        <form
          action='#'
          className='mt-5 space-y-4 max-w-md mx-auto font-poppins'
          autoComplete='false'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='false'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LoginIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Inciar sesión
            </button>
          </div>
        </form>

        <p className='text-center mt-4 font-medium text-gray-900'>
          No tienes una cuenta?{" "}
          <Link to='/signup' className='hover:underline text-indigo-600'>
            Crea una aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

const LoginIcon = ({ className }) => {
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
        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
      />
    </svg>
  );
};
