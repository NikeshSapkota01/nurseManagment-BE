import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import * as userService from "@services/user.service";

/**
 * Get all users.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns Promise
 *
 */
export async function fetchAll(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await userService.getAllUsers();
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
 * @returns Promise
 *
 */
export async function fetchById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let id = parseInt(req.params.id);
    const data = await userService.getUser(id);
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
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await userService.addUser(req.body);

    res.status(HttpStatus.CREATED).json({ data: "User created successfully!" });
  } catch (err) {
    if (err.code === "23505") {
      res
        .status(HttpStatus.CONFLICT)
        .json({ data: "User with the same email already exists" });
    } else {
      next(err);
    }
  }
}
