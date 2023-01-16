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
          // Nikesh@123
          password:
            "$2a$10$nWmgGuVz3PwVQjgbhSNWwubXb7fCgWPSNAJKd1Ol37lLcFKHEZHam",
        },
        {
          name: "RandomName",
          email: "nikesh1@gmail.com",
          // Nikesh@123
          password:
            "$2a$10$skalYIs.h6GxslNJC85H2ugQ021DxkGXVvACoHZoRe3O6rBMpAinG",
        },
      ]);
    });
};
