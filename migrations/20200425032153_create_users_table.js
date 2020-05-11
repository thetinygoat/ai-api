
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('uid').notNullable();
  table.string('name');
  table.string('email').notNullable();
  table.string('password').notNullable();
  table.string('apikey');
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTable('users');
