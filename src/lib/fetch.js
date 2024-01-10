import { connectToDB } from "./connect";
import { User } from "./model";

export const fetchUser = async (email) => {
  try {
    connectToDB();
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(err);
  }
};
