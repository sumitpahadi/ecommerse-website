const routing = require("express").Router();
const data = require("../Usercontroller/data");


const { insertdata, getapidata } = require("../Usercontroller/usercontroller");
const {
  register,
  login,
  dashboard,
  searchproduct,
} = require("../Usercontroller/controller");
const userauth = require("../middleware/auth_middle");
routing.get("/insertaoi", insertdata);
routing.get("/getdata", getapidata);
routing.post("/register", register);
routing.post("/login", login);
routing.post("/search", searchproduct);


routing.get("/dashboard", userauth, dashboard);
routing.get("/data", (req, res) => {
  res.send(data);
});

module.exports = routing;
