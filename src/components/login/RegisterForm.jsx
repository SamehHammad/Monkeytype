"use client";
import React, { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [emailStyle, setEmailStyle] = useState("");
  const [passStyle, setPassStyle] = useState("");
  const [style, setStyle] = useState("");
  const { signup } = useAuth();

  const displayError = (err) => {
    setError(err);
    setTimeout(() => setError(""), 3000);
  };

  const onSubmit = async (formData) => {
    const { username, email, password, verifyEmail, verifyPassword } =
      Object.fromEntries(formData);
    try {
      if (!username || !email || !password) {
        displayError("Oops! Please fill in all the details.");
        setStyle("border border-[red]");
      }
      if (email !== verifyEmail) {
        displayError("Hmm, the email addresses don't match");
        setEmailStyle("border border-[red]");
        setStyle("");
        setPassStyle("");
      }
      if (password !== verifyPassword) {
        displayError("Uh-oh! The passwords don't match");
        setEmailStyle("");
        setStyle("");
        setPassStyle("border border-[red]");
      } else if (
        email === verifyEmail &&
        password === verifyPassword &&
        email &&
        password &&
        username &&
        email.includes("@")
      ) {
        await signup(username, email, password);
        toast.success("your account created successfully");
        setEmailStyle("");
        setStyle("");
        setPassStyle("");
        setTimeout(() => {
          toast.success("You will be logged in automatically");
        }, 1500);
      }
    } catch (err) {
      if (err.message === "Firebase: Error (auth/invalid-email).") {
        displayError("Hold on! please enter a valid email address");
        setEmailStyle("border border-[red]");
        setStyle("");
        setPassStyle("");
      }
    }
  };
  return (
    <>
      <Toaster />
      {error && (
        <div
          class=" bg-red-100 border border-red-400 text-red-700 px-2 py-2 rounded relative"
          role="alert"
        >
          <span class="block sm:inline whitespace-nowrap text-xs font-black">
            {error}
          </span>
        </div>
      )}

      <form action={onSubmit} className="flex flex-col gap-2">
        <Toaster />
        <Input
          placeholder={"username"}
          inputName={"username"}
          costumStyle={`${style}`}
        />
        <Input
          placeholder={"email"}
          inputName={"email"}
          costumStyle={`${style} ${emailStyle}`}
        />
        <Input
          placeholder={"verify email "}
          inputName={"verifyEmail"}
          costumStyle={`${style} ${emailStyle}`}
        />
        <Input
          placeholder={"password"}
          type={"password"}
          inputName={"password"}
          costumStyle={`${style} ${passStyle}`}
        />
        <Input
          placeholder={"verify password"}
          type={"password"}
          inputName={"verifyPassword"}
          costumStyle={`${style} ${passStyle}`}
        />
        <Button
          children={"Sign Up"}
          icon={<IoPersonAddSharp />}
          costumStyle={"w-[250px]"}
        />
      </form>
    </>
  );
};

export default RegisterForm;
