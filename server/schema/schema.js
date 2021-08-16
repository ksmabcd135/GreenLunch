const merge = require('lodash');
const schedule = require('./schedule');
const user = require('./user');
const { makeExecutableSchema } = require('graphql-tools');

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

exports.schemaArray = makeExecutableSchema({
  typeDefs: [Query, schedule.typeDef, user.typeDef],
  //resolvers: merge(resolvers, schedule.resolvers, user.resolvers),
});
