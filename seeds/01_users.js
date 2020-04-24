
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        {
          uid: 'id1', email: 'iamsainisachin@gmail.com', name: 'Sachin Saini', password: 'sachin16', apikey: '12345678',
        },
        {
          uid: 'id2', email: 'iamsainisachinalt@gmail.com', name: 'Peeyush Saini', password: 'peeyush16', apikey: '12345678',
        },
        {
          uid: 'id3', email: 'sachins.ic.17@gmail.com', name: 'Sachin2 Saini', password: 'sachin216', apikey: '12345678',
        },
      ]));
};
