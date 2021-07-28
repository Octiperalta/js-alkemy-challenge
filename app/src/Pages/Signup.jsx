import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import { useAuth } from "../Context/AuthContext";
import { KeyIcon } from "../icons";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signup(email, name, password);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

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
          autoComplete='false'
          onSubmit={handleSubmit}>
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
              ref={emailRef}
              className={`${
                error ? "border-red-300 bg-red-100 " : ""
              } appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base`}
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
              ref={nameRef}
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
              ref={passwordRef}
              className='appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-normal text-lg md:text-base'
            />
          </div>

          {error && <ErrorMessage errorMessage={error} />}

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
