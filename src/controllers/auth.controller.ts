import { NextFunction, Request, Response } from "express";

import * as authService from "../services/auth.service";

/**
 * Generate new access token
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns Promise
 *
 */
export async function refreshToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await authService.checkForTokenInTable(req.body);
    res.json({ data });
  } catch (err) {
    next(err);
  }
}

/**
 * Generate access and refresh token
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns Promise
 *
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await authService.checkForUser(req, res);
    res.json({ data });
  } catch (err) {
    next(err);
  }
}
