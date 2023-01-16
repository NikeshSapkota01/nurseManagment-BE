import bcrypt from "bcryptjs";

import * as User from "@models/User.model";

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
 * @param   {number|string}  id
 * @returns {Promise}
 */
export function getUser(id: number | string) {
  return "TODO: UserModal.getUser(id)";
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export async function addUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const { name, email, password } = data;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return User.addNewUser({ name, password: hashedPassword, email });
}
