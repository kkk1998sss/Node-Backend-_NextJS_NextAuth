const Pool = require("pg").Pool;
// import bcrypt from 'bcrypt';

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432, // You can set your default port or provide it via environment variable
  database: process.env.DB_NAME,
});

pool.connect((err)=>{
  if(err) {
    throw err;
  }
  console.log("connected to database");
})

module.exports = pool;