const { ApolloServer, gql } = require("apollo-server");

//define test SCHEMA
const typeDefs = gql`
  #User Schema for login user
  type User {
    id: String
    pw: String
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    id: 'test',
    pw: '123'
  }
]

const resolvers = {
  Query: {
    users: () => users,
  }
}
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
