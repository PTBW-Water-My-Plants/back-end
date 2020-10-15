
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128).notNullable().unique();
            tbl.integer('phone_number');
            tbl.varchar('password', 128).notNullable();
        })
        .createTable('plants', tbl => {
            tbl.increments();
            tbl.string('nickname', 128).notNullable().unique();
            tbl.string('species', 128).notNullable();
            tbl.string('h2ofrequency', 255);
            tbl.varchar('image_url', 255);
        })
        .createTable('users_plants', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned().notNullable().references('users.id')
                .onDelete('CASCADE').onUpdate('CASCADE');
            tbl.integer('plant_id')
                .unsigned().notNullable().references('plants.id')
                .onDelete('CASCADE').onUpdate('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users_plants')
        .dropTableIfExists('plants')
        .dropTableIfExists('users');
};
