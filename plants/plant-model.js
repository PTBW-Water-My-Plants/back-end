const db = require('../database/connection.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('plants');
}

function getById(id) {
    return db('plants')
    .where({id})
    .first();
}

function insert(plant) {
    return db('plants')
    .insert(plant)
    .then(ids => {
        return getById(ids[0]);
    });
}

function update(id, changes) {
    return db('plants')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('plants')
    .where('id', id)
    .del();
}