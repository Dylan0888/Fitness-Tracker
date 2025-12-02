import React from 'react'

const Button = ({name, method}) => {
  return (
    <button
    onClick={method}
    className='sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-blue-500 p-2 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-700 active:scale-105 transform-all ease-in-out duration-100'>
      {name}
    </button>
  )
}

export default Button
