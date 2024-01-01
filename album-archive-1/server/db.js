const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'lol',
  host: 'localhost',
  port: 5432,
  database: 'albumarchive',
});

module.exports = pool;
