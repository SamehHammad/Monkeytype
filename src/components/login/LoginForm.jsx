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
  const { setLogLoading, googleSignIn, login } = useAuth();
  const [emailStyle, setEmailStyle] = useState("");
  const [passStyle, setPassStyle] = useState("");
  const [style, setStyle] = useState("");
  const router = useRouter();
  const displayError = (err) => {
    setError(err);
    setTimeout(() => setError(""), 3000);
  };
  const handleGoogleSignIn = () => {
    setLogLoading(true);
    try {
      googleSignIn();
      setLogLoading(false);
    } catch (error) {
      setError("unable to sign with Google.");
      setLogLoading(false);
    }
  };

  const onSubmit = async (formData) => {
    setLogLoading(true);
    const { email, password } = Object.fromEntries(formData);
    try {
      if (!email || !password) {
        displayError("Oops! Please fill in all the details.");
        setStyle("border border-[red]");
      }
      if (!email && password) {
        displayError(" please enter email address");
        setEmailStyle("border border-[red]");
        setStyle("");
        setPassStyle("");
      }
      if (email && !password) {
        displayError(" please enter your Password");
        setEmailStyle("");
        setStyle("");
        setPassStyle("border border-[red]");
      } else if (email && password) {
        await login(email, password);
        displayError("");
        setEmailStyle("");
        setStyle("");
        setPassStyle("");
        router.push("/test/profile");
        setLogLoading(false);
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        displayError("Hold on! please enter a valid email address");
        setEmailStyle("border border-[red]");
        setStyle("");
        setPassStyle("");
      }
      setLogLoading(false);
    }
  };
  return (
    <>
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
        <Input
          placeholder={"email"}
          inputName={"email"}
          costumStyle={`${style} ${emailStyle}`}
        />
        <Input
          placeholder={"password"}
          type={"password"}
          inputName={"password"}
          costumStyle={`${style} ${passStyle}`}
        />
        <Button
          children={"Sign In"}
          icon={<FaSignInAlt />}
          costumStyle={"w-[250px]"}
        />
        <p className="text-center text-lightText ">or</p>
      </form>
      <Button
        children={"Google Sign In"}
        icon={<FaGoogle />}
        handleClick={handleGoogleSignIn}
        costumStyle={"w-[250px]"}
      />
    </>
  );
};

export default RegisterForm;
