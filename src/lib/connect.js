import mongoose from "mongoose";

 const connection = {};
 export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("You already connected with db :)");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

    console.log("connected successfully");
  } catch (err) {
    console.log("can't connect to db bcs:" + err);
  }
};
