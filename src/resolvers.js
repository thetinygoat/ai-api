module.exports = {
  Query: {
    user: (_, { email }, { dataSources }) => dataSources.userApi.getUser({ email }),
  },
};
