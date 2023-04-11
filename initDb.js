const { Pool } = require("pg");
const log = require("./helpers/logger");

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.PORT,
  dialect: process.env.DIALECT,
});

module.exports = () => {
  pool.connect((err, client, release) => {
    if (err) {
      return log.error("Error acquiring client", err.stack);
    }
    client.query("SELECT NOW()", (err, result) => {
      release();
      if (err) {
        return log.error("Error executing query", err.stack);
      }
      log.info("Connected to Postgres at", result.rows[0].now);
    });
  });

  pool.on("error", (err) => {
    log.error("Unexpected error on idle client", err.stack);
    process.exit(-1);
  });

  process.on("SIGINT", () => {
    pool.end(() => {
      process.exit(0);
    });
  });

  return pool;
};
