require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const db = require('./db');

const server = new ApolloServer({ typeDefs });
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
