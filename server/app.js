const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const dotenv = require('dotenv');
const dbConnect = require('./model');
dotenv.config();
dbConnect();

const server = new ApolloServer({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
  typeDefs,
  resolvers,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

