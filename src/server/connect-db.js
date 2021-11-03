const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb+srv://Max:qwert12345@cluster0.rytiy.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
