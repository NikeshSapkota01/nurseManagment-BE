import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

/**
 * Get all users.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export function fetchAll(_req: Request, res: Response, next: NextFunction) {
  try {
    res.send("TODO: getAllUsers");
  } catch (err) {
    next(err);
  }
}

/**
 * Get a user by its id.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export function fetchById(req: Request, res: Response, next: NextFunction) {
  try {
    res.send("TODO: getUser");
  } catch (err) {
    next(err);
  }
}

/**
 * Create a new user.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.send("TODO: createUser");
  } catch (err) {
    next(err);
  }
}
