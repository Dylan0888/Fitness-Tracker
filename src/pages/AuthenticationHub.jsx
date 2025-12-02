import React from 'react'
import bg from '../assets/imgs/jim.jpg'
import Login from './Login'

const AuthenticationHub = () => {
  return (
    <section 
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',   backgroundPosition: 'center' }}
        className="h-screen flex place-items-center justify-center z-0">
    
        {/* overlay div for background  */}
        <div className='absolute inset-0 backdrop-blur-sm z-1'></div>

        (/*LogIn - Sign Up*/)
        <Login/>
    </section>
  )
}

export default AuthenticationHub
