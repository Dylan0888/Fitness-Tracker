import React from 'react';
import Title from '../components/forms/Title';
import Input from '../components/forms/Input';
import Button from '../components/Button';
import ExternalSignup from '../components/forms/ExternalSignup';

const Signin = () => {
  return (
    <form
      action=""
      className="
        flex flex-col gap-4 
        px-6 py-6
        bg-white dark:bg-neutral-700 
        rounded-xl shadow-xl 
        z-10
         /* mobile */
        sm:w-[80%]       /* small screens */
        md:w-[80%]       /* tablets */
        lg:w-[100%]       /* laptops */
      "
    >
      <Title text="Create Account" />

      {/* First + Last Name Row */}
      <div
        className="
          flex flex-col 
          gap-4
          md:flex-row   /* side-by-side on medium+ screens */
          md:gap-6
        "
      >
        <div className="flex-1">
          <Input id="First Name" />
        </div>

        <div className="flex-1">
          <Input id="Last Name" />
        </div>
      </div>

      <Input id="email" />
      <Input id="password" />

      <ExternalSignup />

      <Button name="Sign Up" method="" />

      <p className="text-center text-sm sm:text-base md:text-lg">
        Already have an <b>Account</b>? 
        <a href="" className="text-blue-500 ml-1">Log In</a>
      </p>
    </form>
  );
};

export default Signin;
