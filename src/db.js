const knex = require('knex');
const knexfile = require('../knexfile');

const env = process.env.NODE_ENV;
let dbConfig = null;
if (env === 'DEV') {
  dbConfig = knexfile.development;
} else if (env === 'PROD') {
  dbConfig = knexfile.production;
}
knex(dbConfig);

module.exports = knex;
