const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    userId: String,
    userPw: String,
  }
);

module.exports = mongoose.model("User", UserModel);

