
const User = require("../model/userModel");
const resolvers = {
  Query: {
    users(_, args) {
      return User.find();
    },
  },
  User: {
    _id(_, args) {
      return _._id;
    },
    userId(_, args) {
      return _.userId;
    },
    userPw(_, args) {
      return _.userPw;
    }
  },
  Mutation: {
    async createUser(_, args) {
      try {
        const user = new User({
          ...args.userInput,
        })
        const result = await user.save();
        return result;
      } catch (err) {
        throw err;
      }
    }
  },
};

module.exports = resolvers;