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

  async getUser({ email }) {
    const user = await this.store('users').where({ email }).select();
    if (user.length <= 0) return null;
    const { uid } = user[0];
    const resources = await this.store('resource_allocation').join('resources', { 'resources.rid': 'resource_allocation.rid' }).join('users', { 'users.uid': 'resource_allocation.uid' }).where({ 'users.uid': uid })
      .select('resources.name', 'resources.rid', 'resources.description');
    const finalUser = { ...user[0], resources };
    return finalUser;
  }
}

module.exports = DbAPI;
