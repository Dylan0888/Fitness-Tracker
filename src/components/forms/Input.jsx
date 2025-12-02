import React from 'react';

const Input = ({ id }) => {
  const convertedText = id[0].toUpperCase() + id.slice(1);

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      <label
        htmlFor={id}
        className="
          font-medium 
          text-sm
          sm:text-base 
          md:text-lg 
          lg:text-xl 
          xl:text-2xl
        "
      >
        {convertedText}:
      </label>

      {/* Input */}
      <input
        type="text"
        id={id}
        className="
          w-full
          rounded-md 
          border border-neutral-400/50 
          bg-white 
          dark:bg-neutral-300
          text-black
          
          p-2
          sm:p-2 
          md:p-3 
          lg:p-4

          text-sm 
          sm:text-base 
          md:text-lg 
          lg:text-xl 
          xl:text-2xl

          focus:outline-none
          focus:ring-2 
          focus:ring-blue-500 
          focus:shadow-lg 

          transition-all duration-150 ease-in-out
        "
      />
    </div>
  );
};

export default Input;
