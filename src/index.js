require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const jwt = require('jsonwebtoken');
const typeDefs = require('./schema');
const UserAPI = require('./datasources/user');
const store = require('./db');
const resolvers = require('./resolvers');

const dataSources = () => ({ userApi: new UserAPI({ store }) });
const context = ({ req }) => {
  const token = req.headers && req.headers.authorization || '';
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
};
const server = new ApolloServer({
  context, typeDefs, resolvers, dataSources,
});
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
