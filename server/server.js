const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const urlRoutes = require("./routes/url");
mongoose
  .connect("mongodb://localhost/url-shortner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", userRoutes);
app.use("/", urlRoutes);
app.get("/", (req, res) => {
  res.render("index");
});
const port = process.env.port || 3002;
app.listen(port, () => console.log(`App is running at port ${port}`));
