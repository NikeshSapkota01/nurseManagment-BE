import knexJs from "knex";
import KnexConfig from "./knexfile";

/**
 * Database connection.
 */
const knex = knexJs(KnexConfig);

export default knex;
