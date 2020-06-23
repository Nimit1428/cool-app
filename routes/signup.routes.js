const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../DB/User");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@route POST api/signup
//@desc Signip user
//@access PUBLIC

router.post("/signup", (req, res) => {
  const { name, username, email, password, phone, department } = req.body;

  if (!name || !username || !password || !phone || !department) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email: email }).then((users) => {
    console.log(users);

    if (!users) {
      res.status(400).json({ msg: "User already exists" });
    }
    let user = {};
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = bcrypt.hashSync(password, 8);
    user.phone = phone;
    user.department = department;
    let userModel = new User(user);
    userModel.save().then((user) => {
      jwt.sign(
        {
          username: user.username,
          email: user.email,
          phone: user.phone,
          department: user.department,
        },
        "Dummy text",
        { expiresIn: "1h" },
        function (err, token) {
          console.log(token);
          res.status(200).json({ userModel, token });
        }
      );
    });
  });
});
module.exports = router;
