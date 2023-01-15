import * as User from "../models/User.model";

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return User.fetchAllUsers();
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id: Number | String) {
  return "TODO: UserModal.getUser(id)";
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function addUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return User.addNewUser(data);
}
