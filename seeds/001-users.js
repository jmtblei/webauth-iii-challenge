
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'edgelord420', password: 'password', department: 'department1'},
        {username: 'xNarutoGodx', password: 'password', department: 'department2'},
        {username: 'MemeMaster666', password: 'abc123', department: 'department2'}
      ]);
    });
};
