const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userdata = require("../model/Usermodel");
const secretkey = "smnfksjfherjgherjg";
const saltnumber = 10;

const register = async (req, res) => {
  try {
    const { username, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(200).send({ msg: "Passwords do not match" });
    }

    // Check if the email is already in use
    const existingUser = await userdata.findOne({ email });
    if (existingUser) {
      return res.status(200).send({ msg: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltnumber);
    const hashconfirmpass = await bcrypt.hash(confirmpassword, saltnumber);

    // Create the user
    const user = await userdata.create({
      username,
      email,
      password: hashedPassword,
      confirmpassword: hashconfirmpass, // Include the confirmpassword field
    });

    console.log(user);
    res.status(200).send({ user });
  } catch (error) {
    console.error(error); // Use `console.error` to log errors
    res.status(500).send({ msg: "User not created", err: error.message });
  }
};

const login = async (req, res) => {
  try {
    let data = req.body;
    const { email, password } = data;
    console.log(data);
    const login = await userdata.findOne({ email: email });
    if (!login) {
      return res.status(200).send({ msg: "user not found" });
    }
    if ((await bcrypt.compare(password, login.password)) == false) {
      return res.status(200).send({ msg: "incorrect password" });
    }
    const token = jwt.sign({ _id: login._id }, secretkey, { expiresIn: "24h" });
    console.log(login, token);
    const loginemail = login.email;
    const loginpass = login.password;
    console.log(loginemail, loginpass);

    res.status(200).send({ user: [loginemail, loginpass], token: token });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
};

const dashboard = (req, res) => {
  return res.send({
    result: "my name is sumit and you are verify",
  });
};

module.exports = { register, login, dashboard };
