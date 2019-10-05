
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'title of card 1', body: 'some text for the body', status_id: 1, priority_id: 1, created_by: 1, assigned_to: 2 },
        { title: 'title of card 2', body: 'some text for the body', status_id: 2, priority_id: 2, created_by: 2, assigned_to: 3 },
        { title: 'title of card 3', body: 'some text for the body', status_id: 3, priority_id: 3, created_by: 3, assigned_to: 1 },
      ]);
    });
};
