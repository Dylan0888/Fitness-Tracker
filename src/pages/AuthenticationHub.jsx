import React from 'react'
import bg from '../assets/imgs/jim.jpg'
import Login from './Login'
import Signin from './Signin'

const AuthenticationHub = () => {
  return (
    <section 
        style={{ 
            backgroundImage: `url(${bg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
        className="relative h-screen w-screen flex justify-center items-center"
    >
        {/* Background blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        {/* Login form */}
        <div className="relative z-10">
            <Login />
        </div>
    </section>
  )
}

export default AuthenticationHub
