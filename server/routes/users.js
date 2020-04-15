var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post(
  "/",
  [
    check("name", "User name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      console.log("req good");

      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "Email already in use" });
      }

      // get user gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      console.log("avatar good");

      user = new User({
        name,
        email,
        password,
        avatar
      });
      console.log("user good");
      console.log(user);

      const salt = await bcrypt.genSalt(10);
      console.log("salt good");

      user.password = await bcrypt.hash(password, salt);
      console.log("hash good");
      console.log(user);

      try {
        await user.save();
        console.log("save good");
        res.json({ msg: "User saved successfully" });
      } catch (error) {
        console.log("idk what happened");
        res.status(400).json({ msg: "Idk what happened" });
      }

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
