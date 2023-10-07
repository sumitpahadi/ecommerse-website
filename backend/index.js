const express = require("express");
const cors = require("cors");
const routing = require("./Routing file/routing");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", routing);
const port = 4000;
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
