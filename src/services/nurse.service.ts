import { INurse } from "nurse.types";

/**
 * Get all nurses.
 *
 * @returns {Promise}
 */
export function getAllNurse() {
  return "TODO: NurseModal.fetchAll()";
}

/**
 * Get a nurse by Id.
 *
 * @param   {number|string} id
 * @returns {Promise}
 */
export function getNurse(id: number | string) {
  return "TODO: NurseModal.getUser(id)";
}

/**
 * Create new nurse.
 *
 * @param   {Object} nurse
 * @returns {Promise}
 */
export function createNurse(nurse: INurse) {
  return "TODO: NurseModal.addNewNurse";
}

/**
 *  Update nurse.
 *
 * @param   {Object} nurse
 * @returns {Promise}
 */
export function updateNurseById(nurse: INurse) {
  return "TODO: NurseModal.updateNurse";
}

/**
 * Delete nurse.
 *
 * @param   {number|string} id
 * @returns {Promise}
 */
export function deleteNurseById(id: number | string) {
  return "TODO: NurseModal.deleteNurse";
}
