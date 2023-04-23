/** @format */
const mongoose = require("mongoose");

const DB = process.env.DATABASE;



mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,

  })
  .then(() => {
    console.log(`conncetion successfull`);
  })
  .catch((err) => {
    console.log(err);
  });
