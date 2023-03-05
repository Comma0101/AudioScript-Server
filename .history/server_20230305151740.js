import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;
console.log(process.env.OPENAI_ORGANIZATION);
const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
