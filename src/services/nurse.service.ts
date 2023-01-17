import { INurse } from "nurse.types";

import * as NurseModal from "@models/Nurse.model";
import { isEmpty } from "lodash";

/**
 * Get all nurses.
 *
 * @param {number} userId
 * @returns {Promise}
 */
export function getAllNurse(userId: number) {
  return NurseModal.fetchAllNurse(userId);
}

/**
 * Get a nurse by its userId and nurseId.
 * We can only see the nurse created by that user
 *
 * @param   {number} userId
 * @param   {number} nurseId
 * @returns {Promise}
 */
export function getNurse(userId: number, nurseId: number) {
  return NurseModal.fetchNurse(userId, nurseId);
}

/**
 * Create new nurse.
 *
 * @param   {Object} nurse
 * @returns {Promise}
 */
export function createNurse(nurse: INurse) {
  return NurseModal.addNewNurse(nurse);
}

/**
 *  Update nurse.
 *
 * @param   {Object} nurse
 * @returns {Promise}
 */
export async function updateNurseById(
  userId: number,
  nurseId: number,
  nurse: INurse
) {
  const nurseById = await NurseModal.checkForNurse(userId, nurseId);

  if (isEmpty(nurseById)) return Promise.reject({ status: 404 });

  // this generates current timestamp in milliseconds
  let timestamp = new Date().getTime();

  // convert the timestamp to a valid format for postgres
  let date = new Date(timestamp);
  let updated_at = date.toISOString();

  return NurseModal.updateNurseById(nurseId, {
    ...nurse,
    updated_at,
  });
}

/**
 * Delete nurse.
 *
 * @param   {number} userId
 * @returns {Promise}
 */
export async function deleteNurseById(userId: number, nurseId: number) {
  let count = await NurseModal.deleteNurseById(userId, nurseId);

  if (+count === 0) {
    return Promise.reject({ status: 404 });
  }

  return;
}
