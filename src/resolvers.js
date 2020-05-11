module.exports = {
  Query: {
    user: (_, { email }, { dataSources }) => dataSources.userApi.getUser({ email }),
  },
  Mutation: {
    login: (_, { email, password }, { dataSources }) => dataSources.userApi.findOrCreateUser({ email, password }),
  },
};
