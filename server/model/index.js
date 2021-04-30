const mongoose = require('mongoose');
require("dotenv").config()
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;
const DB_NAME = process.env.DB_NAME;

const URI = `mongodb+srv://${DB_USER}:${DB_PW}@greendot.n1jtm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected')
  }).catch(err => {
    console.log(err);
  });
}