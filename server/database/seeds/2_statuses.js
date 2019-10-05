
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        { name: 'New', rank: 1 },
        { name: 'In progress', rank: 2 },
        { name: 'Finished', rank: 3 }
      ]);
    });
};
