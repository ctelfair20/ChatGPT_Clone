import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export const generateChatCompletion = async (req: Request, res: Response, nxt: NextFunction) => {
  const { message } = req.body;
  try {
    const existingUser = await User.findById(res.locals.jwtData.id)
    if (!existingUser) {
      return res.status(401).json({ message: "User not registered or token malfunction" })
    }
    const chats = existingUser.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];

    chats.push({ role: 'user', content: message })
    existingUser.chats.push({ role: 'user', content: message })

    const config = configureOpenAI();
    const openai = new OpenAIApi(config);
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats
    })
    existingUser.chats.push(chatResponse.data.choices[0].message);
    await existingUser.save();
    return res.status(200).json({ chats: existingUser.chats });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "something when wrong" });
  }
}