import express from "express";
import morgan from "morgan";
import appRouter from "../routes/index.js";
import { config } from "dotenv";

//connection to the mongodb database using environment file
config();

const app = express();

//middlewares
app.use(express.json());
//remove in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);


export default app;