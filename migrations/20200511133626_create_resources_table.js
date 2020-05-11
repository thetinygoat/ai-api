
exports.up = (knex) => knex.schema.createTable('resources', (table) => {
  table.increments();
  table.string('rid').notNullable();
  table.string('name').notNullable();
  table.string('description').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTable('resources');
