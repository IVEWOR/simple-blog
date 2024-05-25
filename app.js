const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 3000;

// DB connection
Connect.CONNECTDB(process.env.URL);

// Port Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
