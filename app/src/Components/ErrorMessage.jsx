import React from "react";
import { AlertIcon } from "../icons";

function ErrorMessage({ errorMessage }) {
  return (
    <div className='flex items-center'>
      <AlertIcon className='h-5 w-5 mr-1 text-red-700' />
      <span className='text-red-600 font-medium tracking-tight leading-none'>
        {errorMessage}
      </span>
    </div>
  );
}

export default ErrorMessage;
