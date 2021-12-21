const { Pool } = require('pg');

//environment variables stored in .env file so we don't have to hardcode our database credentials
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}