const jwt = require("jsonwebtoken");
const secretkey = "smnfksjfherjgherjg";

const userauth = (req, res, next) => {
  const bearer = req.headers["authorization"];
  
  if (bearer === undefined) {
    return res.status(401).json({ msg: "No token" });
  }

  const token = bearer.split(" ")[1];
  
  if (token === undefined) {
    return res.status(401).json({ msg: "User not authorized or session expired" });
  }

  try {
    const verify = jwt.verify(token, secretkey);
    if (verify) {
      return next();
    }
    console.log("Not verified");
    return res.status(401).json({ msg: "Not authorized for the particular resource" });
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res.status(401).json({ msg: "JWT verification failed" });
  }
};

module.exports = userauth;
