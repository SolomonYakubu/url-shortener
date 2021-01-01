require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Url = require("../models/url");
const validator = require("email-validator");
const jwt = require("jsonwebtoken");
const verifyToken = require("../auth/userAuth");
//get user by id
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const user = await (await User.findById(req.params.id))
      .populate("url")
      .execPopulate();
    if (!user) {
      return res.sendStatus(404);
    }
    if (req.data.id != user._id) {
      return res.sendStatus(403);
    }
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//create a new user
router.post("/register", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  try {
    if (!validator.validate(email)) {
      return res.sendStatus(400);
    }
    if (await User.findOne({ email })) {
      return res.sendStatus(406);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json(user);
    //   res.render("index", { newUser });
  } catch (error) {
    res.json({ message: error.message });
  }
});
//login to account
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.sendStatus(404);
    }
    const check = await bcrypt.compare(password, user.password);
    if (check) {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.json({ id: user._id, token });
    } else {
      res.sendStatus(406);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

//correct user details

router.patch("/:id", verifyToken, async (req, res) => {
  const data = req.body;
  if (req.data.id != req.params.id) {
    return res.sendStatus(403);
  }
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.sendStatus(404);
    }
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      try {
        const newUser = await user.updateOne({
          $set: { password: hashedPassword },
        });
        console.log(data);
        res.json();
      } catch (error) {
        res.json({ message: error.message });
      }
    } else {
      const newUser = await user.updateOne({ $set: { name: data.name } });

      res.json();
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

//delete a user
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.sendStatus(404);
    }
    if (req.data.id != req.params.id) {
      return res.sendStatus(403);
    }
    await user.delete();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
