"use client";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { createNewUser } from "../../lib/actions";
import { useFormState } from "react-dom";
import Input from "../reusable/Input";
import Button from "../reusable/Button";

const RegisterForm = () => {
  const [state, formAction] = useFormState(createNewUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <p>{state?.error}</p>
      <Input placeholder={"username"} inputName={"username"} />
      <Input placeholder={"email"} inputName={"email"} />
      <Input placeholder={"verify email "} inputName={"verifyEmail"} />
      <Input
        placeholder={"password"}
        type={"password"}
        inputName={"password"}
      />
      <Input
        placeholder={"verify password"}
        type={"password"}
        inputName={"verifyPassword"}
      />
      <Button children={"Sign Up"} icon={<IoPersonAddSharp />} />

    </form>
  );
};

export default RegisterForm;
