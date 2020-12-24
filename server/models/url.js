const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user_id: String,
});

module.exports = mongoose.model("Url", urlSchema);
