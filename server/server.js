require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const urlRoutes = require("./routes/url");
const path = require("path");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/", urlRoutes);
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`App is running at port ${port}`));
