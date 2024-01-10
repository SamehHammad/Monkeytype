"use server";
import bcrypt from "bcryptjs";
import { User } from "./model";
import { connectToDB } from "./connect";
import { signIn, signOut } from "../auth";
export const createNewUser = async (currentState, formData) => {
  const { username, email, password, verifyEmail, verifyPassword } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    if (!email || !password || !username) {
      return { error: "please enter all details correctly" };
    }
    if (!email.includes("@")) {
      return { error: "please enter email correctly" };
    }
    if (email !== verifyEmail) {
      return { error: "email not identical" };
    } else if (password !== verifyPassword) {
      return { error: "password not identical" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return { success: "your account created successfully" };
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const authenticate = async (currentState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    if (!email || !password ) {
      return { error: "please enter all details correctly" };
    }
    if (!email.includes("@")) {
      return { error: "please enter email correctly" };
    }
    await signIn("credentials", { email, password, callbackUrl: "/" });
  } catch (err) {
    return { error: "invalid email or password" };
  }
};
export const logout = async () => {
  try {
    ("use server");
    await signOut();
  } catch (err) {
    console.log("can't log out ");
  }
};
