const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    userId: String,
    UserPw: String,
  }
);

module.exports = mongoose.model("User", UserModel);

