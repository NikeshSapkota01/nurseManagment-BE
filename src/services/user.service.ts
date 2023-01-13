interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return "TODO: UserModal.fetchAll()";
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
 * Check if user already exists.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createUser(user: User) {
  return "TODO: User.checkuserexists then addNewUser(user)";
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function addUser(user: User) {
  return "TODO: UserModal.addnewUser";
}
