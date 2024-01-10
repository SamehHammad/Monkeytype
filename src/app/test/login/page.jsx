import React from "react";
import RegisterForm from "../../../components/login/RegisterForm";
import LoginForm from "../../../components/login/LoginForm";
const Login = () => {
  return (
    <div className="flex w-full justify-around md:pt-2 sm:pt-10  xs:flex-col sm:flex-row xs:gap-8 sm:gap-0 items-center font-mono">
      <div className="flex flex-col ">
        <p className="text-lightText text-lg ">rigister</p>
        <RegisterForm />
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <p className="text-lightText text-lg ">login</p>
          <p className="text-softText text-sm ">forgot password?</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
