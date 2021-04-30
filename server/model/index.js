const mongoose = require('mongoose');
const { DB_USER, DB_PW, DB_NAME } = process.env;

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