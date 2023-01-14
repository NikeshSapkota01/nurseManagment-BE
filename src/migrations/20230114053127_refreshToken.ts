import { Knex } from "knex";

/**
 * Create table `userToken`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("userToken", (table) => {
    table.increments();
    table.integer("user_id").notNullable();
    table.string("refresh_token").notNullable();
  });
}

/**
 * Drop `userToken`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("userToken");
}
