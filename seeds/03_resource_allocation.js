
exports.seed = (knex) => knex('resource_allocation').del()
  .then(() => knex('resource_allocation').insert([
    {
      rid: 'id1', uid: 'id1',
    },
    {
      rid: 'id2', uid: 'id1',
    },
    {
      rid: 'id3', uid: 'id2',
    },
  ]));
