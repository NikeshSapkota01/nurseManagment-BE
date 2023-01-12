import { Knex } from "knex";

/**
 * Create table `User`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("User", (table) => {
    table.increments();
    table.string("name", 128).notNullable();
    table.string("password", 128).notNullable();
    table.string("email", 128).unique().notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
}

/**
 * Drop `User`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("User");
}
