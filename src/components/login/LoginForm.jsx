"use client";
import React, { useEffect, useState } from "react";
import { authenticate } from "../../lib/actions";
import { useFormState } from "react-dom";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { FaSignInAlt, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const [error, setError] = useState("");
  const { login, googleSignIn, currentUser } = useAuth();

  const router = useRouter();
  const handleGoogleSignIn = () => {
    try {
      googleSignIn();
    } catch (error) {
      setError("unable to sign with Google.");
    }
  };

  const onSubmit = async (formData) => {
    const { email, password } = Object.fromEntries(formData);
    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };
  return (
    <>
      {state?.error ? (
        <div
          className="w-[250px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline whitespace-nowrap text-xs font-black">
            {state?.error}
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
      ) : state?.success ? (
        <div
          className="w-[250px] bg-blue-100 border-t border-b border-[lightgreen] text-[green] px-4 py-3"
          role="alert"
        >
          <p className="whitespace-nowrap text-xs font-black">
            {state?.success}
          </p>
        </div>
      ) : (
        ""
      )}
      <form action={onSubmit} className="flex flex-col gap-2">
        <Input placeholder={"email"} inputName={"email"} />
        <Input
          placeholder={"password"}
          type={"password"}
          inputName={"password"}
        />
        <Button children={"Sign In"} icon={<FaSignInAlt />} />
        <p className="text-center text-lightText ">or</p>
      </form>
      <Button
        children={"Google Sign In"}
        icon={<FaGoogle />}
        handleClick={handleGoogleSignIn}
      />
    </>
  );
};

export default RegisterForm;
