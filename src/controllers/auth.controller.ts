import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import * as authService from "@services/auth.service";

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
    const data = await authService.checkForTokenInTable(req);
    res.json({ data });
  } catch (err) {
    if (err.status === 403) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Refresh token doesn't match!" });
    } else if (err.message === "jwt expired") {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Token expired!" });
    } else {
      next(err);
    }
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
    const data = await authService.checkForUser(req);
    res.json({ data });
  } catch (err) {
    if (err.status === 401) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Please try to login with correct credentials!" });
    }
    next(err);
  }
}
