
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('uid').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('apikey');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
