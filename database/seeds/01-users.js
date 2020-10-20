
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          username: 'april',
          password: 'password',
          phoneNumber: 1234567890
        },
        { 
          username: 'kristen',
          password: 'password',
          phoneNumber: 1234567890
        }
      ]);
    });
};