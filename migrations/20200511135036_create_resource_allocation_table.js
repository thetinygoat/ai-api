
exports.up = (knex) => knex.schema.createTable('resource_allocation', (table) => {
  table.increments();
  table.string('uid').references('id').inTable('users').notNullable()
    .onDelete('cascade');
  table.string('rid').references('id').inTable('resources').notNullable()
    .onDelete('cascade');
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTable('resource_allocation');
