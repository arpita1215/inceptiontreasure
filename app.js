/** @format */
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

// require("./db/conn");
const connectDB = require("./db/conn");
require("dotenv").config();

// we link the router file to make our route easy
app.use(require("./route/auth"));

const PORT = process.env.PORT || 5000;
connectDB();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

app.get("/signin", (req, res) => {
  res.send(`Hello world from  the signin server`);
});
app.get("/signup", (req, res) => {
  res.send(`Hello world from  the signup server`);
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

if (process.env.NODE_ENV=== 'production') {
  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
      res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'))
  })
}


app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
