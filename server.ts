import express, { Request, Response } from 'express';
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv";
import userRouter from "./routes/userRouter"

dotenv.config();

const app = express();
const port: number = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api",userRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});