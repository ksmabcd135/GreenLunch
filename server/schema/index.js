const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    user: [User]
  }
  type User {
    _id: ID,
    userId: String,
    userPw: String
  }
  input UserInput{
    userId: String,
    userPw: String
  }
  type Mutation{
    createUser(userInput: UserInput): User!
  }
`;

module.exports = typeDefs;