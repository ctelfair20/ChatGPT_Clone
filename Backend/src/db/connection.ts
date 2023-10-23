import mongoose from "mongoose";
// import { connect, disconnect } from "mongoose";

// async function connectToDatabase() {
//   try {
//     await connect(process.env.MONGODB_URL);
//   } catch (error) {
//     console.log(error);
//     throw new Error("Cannot Connect to mongoDB");
//   }
// };

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Connect to mongoDB");
  }
};

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Disconnect from mongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase }


