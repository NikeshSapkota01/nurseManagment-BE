import { Knex } from "knex";

/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const table_name = "User";

exports.seed = function (knex: Knex) {
  return knex(table_name)
    .del()
    .then(() => {
      return knex(table_name).insert([
        {
          name: "Nikesh",
          email: "nikesh@gmail.com",
          password: "Abcd@123",
        },
        {
          name: "SomeName",
          email: "nikesh1@gmail.com",
          password: "Abcd@123",
        },
      ]);
    });
};
