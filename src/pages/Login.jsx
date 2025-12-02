import React from 'react'
import Title from '../components/forms/Title'
import Input from '../components/forms/Input'
import Button from '../components/Button'
import Paragraph from '../components/forms/Paragraph'
import bg from '../assets/imgs/jim.jpg'

const Login = () => {
  return (
    <section 
    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',   backgroundPosition: 'center' }}
    className="h-screen flex place-items-center justify-center z-0">

        {/* overlay div for background  */}
        <div className='absolute inset-0 backdrop-blur-sm z-1'></div>

        <form action=""
        className='flex flex-col gap-3 px-10 py-5 bg-white dark:bg-neutral-700 rounded-xl shadow-xl w-[40%] z-2'>
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
    </section>
  )
}

export default Login
