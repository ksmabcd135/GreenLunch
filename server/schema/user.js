const gql = require('graphql-tag');

exports.typeDef = gql`
  extend type Query {
    users: [User]
  }
  type User {
    _id: ID,
    userId: String,
    userPw: String,
  }
`;

exports.resolvers = {
  Query: {
    users(_, args) {
      return users.find();
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
}