import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("bufferCommands", false);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB CONNECTION FAILED");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
