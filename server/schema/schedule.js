const gql = require('graphql-tag');

exports.typeDef = gql`
  extend type Query {
    schedules: [Schedule]
  }
  
  type Schedule {
    _id: ID,
    title: String,
    message: String,
    date: String,
  }
`;

exports.resolvers = {
  Query: {
    schedules(_, args) {
      return Schedule.find();
    },
  },
  Schedule: {
    _id(_, args) {
      return _._id;
    },
    title(_, args) {
      return _.title;
    },
    message(_, args) {
      return _.message;
    },
    date(_, args) {
      return _.date;
    }
  },
}
