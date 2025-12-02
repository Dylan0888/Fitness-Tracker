import React from 'react'

const Title = ({text}) => {
  return (
    <header className='text-xl md:text-2xl lg:text-4xl text-center font-bold p-2'>
      <h1>{text}</h1>
    </header>
  )
}

export default Title
