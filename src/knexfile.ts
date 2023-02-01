require("dotenv").config({ path: `${__dirname}/../.env` });

// Default configuration for database connection (different for dev and test)
const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: "utf8",
  timezone: "UTC",
};

const knexConfig = {
  connection,
  client: process.env.DB_CLIENT,
  migrations: {
    tableName: "migrations",
    directory: "./migrations",
    stub: "./stubs/migration.stub",
  },
  seeds: {
    directory: "./seeds",
    stub: "./stubs/seed.stub",
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default knexConfig;
