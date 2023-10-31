import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users })
  } catch (err) {
    console.log(`cannot get all users: ${err}`);
    return res.json({ message: "ERROR", cause: err.message })
  }
}

const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // get user info from request body
    const { name, email, password } = req.body;

    // check if there is already a user with this email
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(401).send("This email is already in use.")
    }

    // if user does not exist, encrypt passwprd
    const saltRounds = 10;
    // salt created
    const salt = await bcrypt.genSalt(saltRounds);
    // hash created
    const hash = await bcrypt.hash(password, salt);
    // Created new user with user info and encypted password
    const user = new User({ name, email, password: hash });
    // Store hash in your password DB
    await user.save();

    return res.status(201).json({ message: "OK", id: user._id.toString() })

  } catch (err) {
    console.log(`cannot conplete user signup: ${err}`);
    return res.json({ message: "ERROR", cause: err.message })
  }
}

const userLogin = async (req: Request, res: Response, next: NextFunction) => {

}

export { getAllUsers, userSignUp, userLogin }