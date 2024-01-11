"use client";
import React, { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { createNewUser } from "../../lib/actions";
import { useFormState } from "react-dom";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signup } = useAuth();
  const onSubmit = async (formData) => {
    const { username, email, password, verifyEmail, verifyPassword } =
      Object.fromEntries(formData);
    try {
      if (!email || !password || !username) {
        return setError("please enter all details correctly");
      }
      if (!email.includes("@")) {
        return setError("please enter email correctly");
      }
      if (email !== verifyEmail) {
        return setError("email not identical");
      } else if (password !== verifyPassword) {
        return setError("password not identical");
      }
      await signup(username, email, password);
      setSuccess("your account created successfully");
    } catch (err) {
      return setError("Something went wrong" + err);
    }
  };
  return (
    <>
      {error ? (
        <div
          class="w-[250px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline whitespace-nowrap text-xs font-black">
            {error}
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
      ) : success ? (
        <div
          class="w-[250px] bg-blue-100 border-t border-b border-[lightgreen] text-[green] px-4 py-3"
          role="alert"
        >
          <p class="whitespace-nowrap text-xs font-black">{success}</p>
        </div>
      ) : (
        ""
      )}
      <form action={onSubmit} className="flex flex-col gap-2">
        <Toaster />
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
    </>
  );
};

export default RegisterForm;
