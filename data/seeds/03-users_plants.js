
exports.seed = function (knex, Promise) {
  return knex('users_plants').insert([
    { user_id: 1, plant_id: 4 },
    { user_id: 2, plant_id: 2 },
    { user_id: 3, plant_id: 1 },
  ]);
};
