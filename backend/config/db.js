const mysql = require('mysql2/promise');
require('dotenv').config();

var mysql = required('mysql');
var util = required('util');

var pool = mysql.creatorPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    passwrod: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
})

pool.query = util.promisify(pool.query);

module.exports = pool;