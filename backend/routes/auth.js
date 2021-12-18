const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);
var jwt = require('jsonwebtoken');
const JWT_SECRET = "imgoodforme";

const { body, validationResult } = require("express-validator");

//create a user:Post "/api/auth/createuser".Dosen't require auth

router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password").isLength({ min: 5 }),
  ],

  async (req, res) => {
    //if their are errors than it will return nad request and the errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email exists " });
    }
    const salt = await bcrypt.genSaltSync(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      user: {
        id:user.id
      }
    }
    const autoToken=jwt.sign(data,JWT_SECRET)
    // console.log(jwtData);
    res.json({ autoToken });

    //check whether the user with email exists already
  }
);

module.exports = router;
