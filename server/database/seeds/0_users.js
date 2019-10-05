
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'solid', last_name: 'snake', email: 'solidsnake808@shadowmoses.com' },
        { first_name: 'poogie', last_name: 'monhan', email: 'tigrexgoodboy@gmail.com' },
        { first_name: 'hideo', last_name: 'kojima', email: 'dsismgszero@poop.com' }
      ]);
    });
};
