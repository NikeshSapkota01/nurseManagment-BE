import { get } from "lodash";
import { NextFunction, Request, Response } from "express";

import * as nurseService from "@services/nurse.service";

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
    const data = await nurseService.getAllNurse();
    res.json({ data });
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
    const nurseId = get(req, "params.nurseId");

    const data = await nurseService.getNurse(nurseId);
    res.json({ data });
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
    const userId = get(req, "user.id");
    const body = req.body;

    const data = await nurseService.getNurse({ ...body, userId });
    res.json({ data });
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
    // need to find first then update
    const data = await nurseService.updateNurseById(req.body);
    res.json({ data });
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
    const nurseId = get(req, "params.nurseId");
    await nurseService.deleteNurseById(nurseId);
    res.json({ data: "Deleted Successfully!" });
  } catch (err) {
    next(err);
  }
}
