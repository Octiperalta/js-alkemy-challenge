import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { LoginIcon } from "../icons";
import ErrorMessage from "../Components/ErrorMessage";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

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
          className='mt-5 space-y-3 max-w-md mx-auto font-poppins'
          autoComplete='false'
          onSubmit={handleSubmit}>
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
                ref={emailRef}
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
                ref={passwordRef}
              />
            </div>
          </div>
          {error && <ErrorMessage errorMessage={error} />}

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
