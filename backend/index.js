const express = require("express");
const cors = require("cors");
const connectDB =require('./mongoose/mongoose')
const routing = require("./Routing file/routing");
const dotenv = require("dotenv");
const app = express();
const port = 4000;
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", routing);

const startConnection = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(port, () => {
      console.log("Server is Runing on" + port);
    });
  } catch (err) {
    console.log(`Database is showing Error`);
  }
};

startConnection();
