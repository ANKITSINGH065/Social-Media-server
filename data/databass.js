import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    console.log(`server connected to databass ${connection.host}`);
  } catch (error) {
    console.log("some data occure", error);
    process.exit(1);
  }
};
