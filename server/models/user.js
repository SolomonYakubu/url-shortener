const mongoose = require("mongoose");
// const urlSchema = require("./url");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  url: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Url",
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
