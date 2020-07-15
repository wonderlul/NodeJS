require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const noticeBoardRouter = require("./routers/noticeBoard");

const express = require("express");
const app = express();

app.use(express.json());

app.use("/", noticeBoardRouter);

app.use((error, req, res, next) => {
  res.send(error.message);
});

app.listen(4000, () => console.log("server started"));
