import { Knex } from "knex";

/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

const table_name = "Nurse";

exports.seed = function (knex: Knex) {
  return knex(table_name)
    .del()
    .then(() => {
      return knex(table_name).insert([
        {
          firstName: "Awesome",
          lastName: "Developer",
          email: "awesome@gmail.com",
          contact: "9898989898",
          working_days: "2",
          duty_start_time: "2023-01-16 09:47:57.91313+00",
          duty_end_time: "2023-01-16 10:47:57.91313+00",
          isRoundingManager: false,
          created_by: 1,
        },
        {
          firstName: "Party",
          middleName: "Song",
          lastName: "Singh",
          email: "party@gmail.com",
          contact: "9898989898",
          working_days: "2",
          duty_start_time: "2023-01-16 09:47:57.91313+00",
          duty_end_time: "2023-01-16 10:47:57.91313+00",
          isRoundingManager: true,
          created_by: 2,
        },
      ]);
    });
};
