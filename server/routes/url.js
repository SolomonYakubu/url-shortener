const express = require("express");
const router = express.Router();

const crypto = require("crypto");
const User = require("../models/user");
const Url = require("../models/url");
const verifyToken = require("../auth/userAuth");
//create a new url
router.post("/:user_id", verifyToken, async (req, res) => {
  const fullUrl = req.body.fullUrl;
  const user_id = req.params.user_id;
  const shortUrl = crypto.randomBytes(5).toString("hex");
  try {
    if (req.data.id != user_id) {
      return res.sendStatus(403);
    }
    const url = new Url({
      fullUrl,
      shortUrl,
      user_id,
    });

    const newUrl = await url.save();
    console.log("hello");
    res.json(newUrl);
  } catch (error) {
    res.json({ message: error.message });
  }
});
//visit a url
router.get("/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;
  try {
    const url = await Url.findOne({ shortUrl });
    if (!url) {
      return res.sendStatus(404);
    }
    const fullUrl = url.fullUrl;
    url.clicks++;
    url.save();
    res.redirect(`http://${fullUrl}`);
  } catch (error) {
    res.json({ message: error.message });
  }
});
//Correcting a url
router.patch("/:id", verifyToken, async (req, res) => {
  const fullUrl = req.body.fullUrl;
  try {
    const url = await Url.findOne({ _id: req.params.id });

    if (!url) {
      return res.sendStatus(404);
    }
    if (req.data.id != url.user_id) {
      return res.sendStatus(403);
    }
    const newUrl = await url.updateOne({ $set: { fullUrl } }, (err) => {
      if (err) {
        return res.json({ message: err.message });
      }
      res.json({ message: "Updated successfully" });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//deleting a url
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const url = await Url.findOne({ _id: req.params.id });

    if (!url) {
      return res.sendStatus(404);
    }
    if (req.data.id != url.user_id) {
      return res.sendStatus(403);
    }
    await url.delete();
    res.json(url);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
