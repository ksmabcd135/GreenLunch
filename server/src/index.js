const { ApolloServer } = require("apollo-server");

//define test SCHEMA
const typeDefs = `
  type Query {
    info: String!
  }
`;

//Actual implementation of GraphQL
const resolvers = {
  Query: {
    info: () => `This is the test API of GraphQL`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server is running on ${url}`);
});
