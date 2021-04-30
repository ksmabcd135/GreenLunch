
const User = require("../model/userModel");
const resolvers = {
  Query: {
    user(_, args) {
      return User.find();
    },
  },
  Mutation: {
    createUser(_, args) {
      const newUser = new User({
        ...args.personInput,
      });
      return newUser.save();
    },
  },
};

module.exports = resolvers;