const pg = require('pg');
const configs = {
    user: 'Bryan',
    host: '127.0.0.1',
    database: 'travgy',
    port: 5432
}

const db = new pg.Pool(configs);

module.exports = db;