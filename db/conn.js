// /** @format */
// const mongoose = require("mongoose");

// const DB = process.env.DATABASE;



// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useUnifiedTopology: true,
//     // useFindAndModify: false,

//   })
//   .then(() => {
//     console.log(`conncetion successfull`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const mongoose = require("mongoose");

const connectDB =async()=>{
    try {
       await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb is connected");
    } catch (error) {
       console.log(error); 
       console.log("Database is not connected");
    }

};

module.exports = connectDB;