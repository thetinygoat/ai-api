const { DataSource } = require('apollo-datasource');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');

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

  async findOrCreateUser({ email, password }) {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const existingUser = await this.store('users').where({ email });
    if (existingUser.length > 0) {
      const user = existingUser[0];
      const isAuhtenticated = await bcrypt.compare(password, user.password);
      if (isAuhtenticated) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        return token;
      }
    }
    const userID = v4(); // create type 4 uuid
    await this.store('users').insert({ email, password: passwordHash, uid: userID });
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
  }
}

module.exports = DbAPI;
