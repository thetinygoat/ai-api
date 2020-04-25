module.exports = {
  Query: {
    user: (_, { email }, { dataSources }) => dataSources.userApi.getUsers({ email }),
  },
};
