const userResolvers = require('./user');

const resolvers = {
  ...userResolvers,
    Mutation:{
    ...userResolvers.Mutation,
  }
};

module.exports = resolvers; 
