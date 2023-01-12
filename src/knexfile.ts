require("dotenv").config({ path: `${__dirname}/../.env` });

// Default configuration for database connection (different for dev and test)
const connection = {
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "5432",
  user: process.env.DB_USER || "nurse_management",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
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
