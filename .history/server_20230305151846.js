import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
