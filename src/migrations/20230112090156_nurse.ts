import { Knex } from "knex";

/**
 * Create table `Nurse`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("Nurse", (table) => {
    table.increments();
    table.string("firstName", 128).notNullable();
    table.string("middleName", 128);
    table.string("lastName", 128).notNullable();
    table.string("email", 128).notNullable().unique();
    table.string("contact", 20);
    table.string("working_days");
    table.time("duty_start_time");
    table.time("duty_end_time");
    table.string("image", 1024);
    table.boolean("isRoundingManager").defaultTo(false);
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    table.integer("created_by").unsigned().notNullable();
    table.foreign("created_by").references("id").inTable("user");
    table.boolean("is_deleted").defaultTo(false);
  });
}

/**
 * Drop `Nurse`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("Nurse");
}
