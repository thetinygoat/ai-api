
exports.seed = (knex) => knex('resources').del()
  .then(() => knex('resources').insert([
    {
      rid: 'id1', name: 'SENTIMENT_API', description: 'this is sentiment api',
    },
    {
      rid: 'id2', name: 'VISION_API', description: 'this is vision api',
    },
    {
      rid: 'id3', name: 'SPAM_API', description: 'this is spam api',
    },
  ]));
