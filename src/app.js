import express from "express";
import cors from "cors";

import { MainRouter } from "./routes/mainRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", MainRouter);

export default app;
