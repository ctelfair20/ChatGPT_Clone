import express from "express";
import { config } from "dotenv";

//connection to the mongodb database using environment file
config();

const app = express();

//middlewares
app.use(express.json());

export default app;