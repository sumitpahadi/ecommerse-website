const routing = require("express").Router();
const { register, login, dashboard,data } = require("../Usercontroller/controller");
const userauth = require("../middleware/auth_middle");
routing.post("/register", register);
routing.post("/login", login);
routing.get("/dashboard", userauth, dashboard);
routing.get("/data", (req, res) => {
  res.send(data);
});
module.exports = routing;
