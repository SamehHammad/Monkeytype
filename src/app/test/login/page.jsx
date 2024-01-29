"use client";
import React, { useEffect, useState } from "react";
import RegisterForm from "../../../components/login/RegisterForm";
import LoginForm from "../../../components/login/LoginForm";
import { useAuth } from "../../../context/AuthContext";
import {  useRouter } from "next/navigation";
import LoggingLaoding from "../../../components/login/LoggingLaoding";
const Login = () => {
  const {
    currentUser,
    LogOutLoading,
    setLogOutLoading,
  } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (currentUser !== null) {
      router.push("/test/profile");
    }
  });
  useEffect(() => {
    setLogOutLoading(true);
    setTimeout(() => setLogOutLoading(false), 500);
  }, []);
  if (LogOutLoading) {
    return <LoggingLaoding children={"Logging out... "} />;
  }
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
 