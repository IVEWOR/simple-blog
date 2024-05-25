const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

// routes
const authRoute = require("./routes/Auth");
const postRoute = require("./routes/Posts");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// DB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DB Connected"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use("/api/blog", authRoute);
app.use("/api/blog/posts", postRoute);

// Port Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
