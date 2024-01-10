"use server";
import bcrypt from "bcryptjs";
import { User } from "./model";
import { connectToDB } from "./connect";
import { signIn, signOut } from "../auth";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";
export const createNewUser = async (currentState, formData) => {
  const { username, email, password, verifyEmail, verifyPassword } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    if (email !== verifyEmail) {
      console.log("email not identical");
      return { error: "email not identical" };
    } else if (password !== verifyPassword) {
      console.log("password not identical");
      return { error: "password not identical" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    notify();
  } catch (err) {
    console.log("can't add new user bcs : " + err);
    return { error: "Something went wrong: " + err };
  }
};
const notify = () => toast("Here is your toast.");

export const authenticate = async (currentState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password, callbackUrl: "/" });
  } catch (err) {
    return { error: "Wrong Credentials!" + err };
  }
};
export const logout = async () => {
  try {
    ("use server");
    await signOut();
  } catch (err) {
    console.log("can't log out ");
  }
  revalidatePath("/test/profile");
};
