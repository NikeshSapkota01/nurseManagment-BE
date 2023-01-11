require("dotenv").config({ path: `${__dirname}/../.env` });

// Basic db connection object
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
};

export default knexConfig;
