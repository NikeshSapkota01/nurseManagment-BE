import { NextFunction, Request, Response } from "express";

/**
 * Get all nurse.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export async function fetchAllNurse(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("TODO: getAllNurse");
  } catch (err) {
    next(err);
  }
}

/**
 * Get a nurse by its id.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export async function fetchNurseById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("TODO: getNurse");
  } catch (err) {
    next(err);
  }
}

/**
 * Create a new nurse.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export async function createNurse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("TODO: createNurse");
  } catch (err) {
    next(err);
  }
}

/**
 * Update new nurse.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export async function updateNurse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("TODO: updateNurseById");
  } catch (err) {
    next(err);
  }
}

/**
 * Update new nurse.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
export async function deleteNurse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.send("TODO: deleteNurseById");
  } catch (err) {
    next(err);
  }
}
