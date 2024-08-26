const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Annatai123',
    database: 'hr_db',
    post: 5432
});

module.exports = pool