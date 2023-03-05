import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;

const configuration = new Configuration({
  organization: "org-ygg4H6k8tXDl02uM7MV9WkD4",
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
