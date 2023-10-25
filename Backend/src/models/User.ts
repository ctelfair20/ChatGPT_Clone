import mongoose from "mongoose";
import { chatSchema } from "./Chat.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // creates indices for email to improve search
    unique: true,
  },
  chats: [chatSchema],
});

export default mongoose.model("User", userSchema);