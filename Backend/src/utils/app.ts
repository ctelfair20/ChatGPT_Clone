import express from "express";
import morgan from "morgan";
import appRouter from "../routes/index.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

//connection to the mongodb database using environment file
config();

const app = express();
app.use(cookieParser(process.env.COOKIE_SECRET));

//middlewares
app.use(express.json());
//remove in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);


export default app;