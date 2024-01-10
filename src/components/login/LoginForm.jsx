"use client";
import React from "react";
import { authenticate, signInWithGoogle } from "../../lib/actions";
import { useFormState } from "react-dom";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { FaSignInAlt, FaGoogle } from "react-icons/fa";
const RegisterForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-2">
        <p>{state?.error}</p>
        <Input placeholder={"email"} inputName={"email"} />
        <Input
          placeholder={"password"}
          type={"password"}
          inputName={"password"}
        />
        <Button children={"Sign In"} icon={<FaSignInAlt />} />
        <p className="text-center text-lightText ">or</p>
      </form>
      <from  className="flex flex-col gap-2">
        <Button
          children={"Google Sign In"}
          icon={<FaGoogle />}
        />
      </from>
    </>
  );
};

export default RegisterForm;
