import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import * as userService from "../services/user.service";

/**
 * Get all users.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export function fetchAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = userService.getAllUsers();
    res.json({ data });
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
    const data = userService.getUser(req.params.id);
    res.json({ data });
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
    const data = userService.createUser(req.body);
    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
}
