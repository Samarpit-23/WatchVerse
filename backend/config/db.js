import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri="mongodb+srv://gupta20072000:samg123456@cluster0.rtio1wb.mongodb.net/Ecommerce"
    await mongoose.connect(uri);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
