const { DataSource } = require('apollo-datasource');
const knex = require('knex');

class DbAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUsers({ email }) {
    const users = await this.store('users').where({ email }).select();
    return users[0];
  }
}

module.exports = DbAPI;
