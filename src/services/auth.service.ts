interface Auth {
  email: string;
  password: string;
}

/**
 * Check if the refresh token is being stored in the database before sending another token to requested user,
 * if refresh token does not exist throw an error,
 * else extract the user details from the refresh token, and generate new access token and send to user
 *
 * @param {String} token
 *
 * @returns Promise
 */
export function checkForTokenInTable(token: string) {
  return "TODO: User.checkForTokenInTable then createJWTToken";
}

/**
 * When user login by providing the username and password,
 * first we will check for the existence of user in the database using the username provided by the user,
 * then we will show error if the user does not exists, else we will validate the password provided by the user,
 * If both matched then we will extract the username and id of the user for JWT payload and pass it to generate
 * two tokens
 *
 * 1. authorize_token: token
 * 2. refresh_token: refreshToken
 *
 * and send it back to front end
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 *
 * @returns Promise
 *
 */
export function checkForUser(user: Auth) {
  return "TODO: UserModal.checkForUser then createJWTToken";
}
