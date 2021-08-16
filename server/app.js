const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');
const dbConnect = require('./model');
const schema = require('./schema/schema');
dotenv.config();
dbConnect();



const server = new ApolloServer({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
  schema: schema.schemaArray,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

