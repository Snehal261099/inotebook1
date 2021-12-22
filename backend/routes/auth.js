const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);
var jwt = require("jsonwebtoken");
const JWT_SECRET = "imgoodforme";
const fetchuser = require("../middleware/fetchuser");

const { body, validationResult } = require("express-validator");

//ROUTE 1:create a user:Post "/api/auth/createuser".Dosen't require auth
let success = false;
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
        id: user.id,
      },
    };
    const autoToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, autoToken });
    //check whether the user with email exists already
  }
);

//ROUTE 2:Authenticate a  user :Post "/api/auth/login"

router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid pasword").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please enter correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(404)
          .json({ error: "Please enter correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const autoToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, autoToken });
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Internal server error");
    }
  }
);

//ROUTE 3:get logged in user detials :Post "/api/auth/getuser"

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Internal server error");
  }
});

module.exports = router;
