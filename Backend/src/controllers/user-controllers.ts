import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

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
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    // Created new user with user info and encypted password(hash)
    const user = new User({ name, email, password: hash });

    // Store hash in your password DB
    await user.save();
    // user and password have been verified
    // Clear any old cookies regardless of expiration date
    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true
    });

    // create jwt and cookie
    const token = createToken(existingUser._id.toString(), existingUser.email, "7d");
    const cookieExpiresIn = new Date();
    cookieExpiresIn.setDate(cookieExpiresIn.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires: cookieExpiresIn,
      httpOnly: true,
      signed: true
    });

    return res.status(201).json({ message: "OK", name: existingUser.name, email: existingUser.email })

  } catch (err) {
    console.log(`cannot complete user signup: ${err}`);
    return res.json({ message: "ERROR", cause: err.message })
  }
}

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //  acccess the email and password from the req.body
    const { email, password } = req.body;
    // find user with matching email
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(401).json({ message: "User not registered" });
    }
    // user found
    // confirm password by comparing plain password with hashed password
    const isMatch = await bcrypt.compare(password, existingUser.password)

    // if no match is found
    if (!isMatch) {
      res.status(403).send("Incorrect password");
    }

    // before creating a new cookie, clear any old ones regardless of expiration date
    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true
    });

    // user and password have been verified
    // create jwt and cookie
    const token = createToken(existingUser._id.toString(), existingUser.email, "7d");
    const cookieExpiresIn = new Date();
    cookieExpiresIn.setDate(cookieExpiresIn.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires: cookieExpiresIn,
      httpOnly: true,
      signed: true
    });

    res.status(200).json({ message: "OK", name: existingUser.name, email: existingUser.email })
  } catch (err) {
    console.log(`cannot complete user login ${err}`);
    return res.json({ message: "ERROR", cause: err.message })
  }
}

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const existingUser = await User.findById(res.locals.jwtData.id)
    if (!existingUser) {
      return res.status(401).json({ message: "User not registered or Token malfunction" });
    }

    // user found, check for matching id's
    if (existingUser.id.toString() !== res.locals.jwtData.id) {
      return res.status(401).json({ message: "Permission mismatch" });
    }

    res.status(200).json({ message: "OK", name: existingUser.name, email: existingUser.email })

  } catch (err) {
    console.log(`cannot complete user login ${err}`);
    return res.json({ message: "ERROR", cause: err.message })
  }
}

export { getAllUsers, userSignUp, userLogin, verifyUser }