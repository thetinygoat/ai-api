require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const UserAPI = require('./datasources/user');
const store = require('./db');
const resolvers = require('./resolvers');

const dataSources = () => ({ userApi: new UserAPI({ store }) });

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
