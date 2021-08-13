const Pool = require('pg').Pool;
const env = require('dotenv').config()


const pool = new Pool({
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;