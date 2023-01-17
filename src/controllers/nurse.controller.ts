import { get } from "lodash";
import HttpStatus from "http-status-codes";
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
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = get(req, "user.id");
    const data = await nurseService.getAllNurse(userId);
    res.json({ data });
  } catch (err) {
    next(err);
  }
}

/**
 * Get a nurse by its userId
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
    const userId = get(req, "user.id");
    const nurseId = get(req, "params.nurseId");

    const data = await nurseService.getNurse(userId, +nurseId);
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
    const created_by = get(req, "user.id");
    const body = req.body;

    const data = await nurseService.createNurse({ ...body, created_by });
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
    const userId = get(req, "user.id");
    const nurseId = get(req, "params.nurseId");
    const data = await nurseService.updateNurseById(userId, +nurseId, req.body);
    res.json({ data });
  } catch (err) {
    if (err.status === 404) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Nurse not found!" });
    }
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
    const userId = get(req, "user.id");
    const nurseId = get(req, "params.nurseId");
    await nurseService.deleteNurseById(userId, +nurseId);

    res.json({ data: "Deleted Successfully!" });
  } catch (err) {
    if (err.status === 404) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Nurse not found!" });
    }
    next(err);
  }
}
