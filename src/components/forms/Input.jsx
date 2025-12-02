import React from 'react'

const Input = ({id}) => {
  //Converts the first character of id to upper case for the label 
  const convertedText = id[0].toUpperCase() + id.slice(1);

  return (
    <>
      <label htmlFor={id}
      className='sm:text-md md:text-lg lg:text-xl xl:text-2xl font-medium'>

        {convertedText}:
      </label>
      
      <input type="text" 
      id={id}
      className='outline-2 rounded-md outline-neutral-600/40 dark:bg-neutral-300 dark: text-black focus:outline-blue-500 focus:shadow-lg p-1 lg:p-3 sm:text-md md:text-lg lg:text-xl xl:text-2xl transition-all ease-in-out duration-100'
      />
    </>
  )
}

export default Input
