const { Pool, Client } = require("pg");
const connectionString = "postgres://postgres:password@localhost:5432/postgres";

const db = new Client({
  connectionString: connectionString
});

module.exports = db;
