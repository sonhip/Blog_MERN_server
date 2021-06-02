import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import posts from "./routers/posts.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:admin@cluster0.4hpcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connect to DB!");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  })
