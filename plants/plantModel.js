const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    getplants,
    findById,
}

function add(plantinfo) {
    return db('plants').insert(plantinfo, 'id');
}

function update(changes, id) {
    return db('plants').where({ id }).update(changes);
}

function remove(id) {
    return db('plants').where({ id }).del();
}

function getplants() {
    return db('plants');
}

function findById(id) {
    return db('plants').where({ id }).first();
}