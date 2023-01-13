import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

/**
 * Generate new access token
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 *
 *  @returns Promise
 *
 */
export function refreshToken(_req: Request, res: Response, next: NextFunction) {
  try {
    res.send("TODO: checkForTokenInTable");
  } catch (err) {
    next(err);
  }
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
export function login(req: Request, res: Response, next: NextFunction) {
  try {
    res.send("TODO: checkForUser");
  } catch (err) {
    next(err);
  }
}
