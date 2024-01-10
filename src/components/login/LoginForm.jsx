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
      {state?.error ? (
        <div
          class="w-[250px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline whitespace-nowrap text-xs font-black">
            {state?.error}
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
      ) : state?.success ? (
        <div
          class="w-[250px] bg-blue-100 border-t border-b border-[lightgreen] text-[green] px-4 py-3"
          role="alert"
        >
          <p class="whitespace-nowrap text-xs font-black">{state?.success}</p>
        </div>
      ) : (
        ""
      )}
      <form action={formAction} className="flex flex-col gap-2">
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
