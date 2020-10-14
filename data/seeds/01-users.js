
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { username: 'PoisonIvy', phone_number: '(555)123-4567', password: 'Itchy1' },
    { username: 'Jenny', phone_number: '(555)867-5309', password: 'Music80' },
    { username: 'Audrey2', phone_number: '(212)555-6789', password: 'FeedMe86' },
  ]);
};
