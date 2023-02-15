import React from 'react'
import {RotatingLines} from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <RotatingLines 
      type="Circles"
      strokeColor="#00BFFF"
      height={20}
      width={70}
      className='m-5'
      />

      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner;