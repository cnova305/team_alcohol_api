const { Pool } = require("pg");

const pool = new Pool({
  host: "host.docker.internal",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

module.exports = pool;
