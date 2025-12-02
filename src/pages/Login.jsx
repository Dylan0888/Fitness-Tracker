import React from 'react'
import Title from '../components/forms/Title'
import Input from '../components/forms/Input'
import Button from '../components/Button'
import Paragraph from '../components/forms/Paragraph'


const Login = () => {
  return (
    <form action=""
     className='flex flex-col gap-3 px-10 py-5 bg-white dark:bg-neutral-700 rounded-xl shadow-xl '>
        <Title text={"Log In"}/>
        <Input id={"email"}/>
        <Input id={"password"}/>
            
        <p className='sm:text-xs md:text-sm lg:text-md xl:text-lg text-end cursor-pointer hover:underline duration-100 ease-in-out transition-all'>
            Forgotten Password?
        </p>

        <Button name={"Log In"} method={""}/>
        <p className='sm:text-xs md:text-sm lg:text-md xl:text-lg'>
            Don't have an Account? <a href="" className='text-blue-500'>Sign Up</a>
        </p>
    </form>
  )
}

export default Login
