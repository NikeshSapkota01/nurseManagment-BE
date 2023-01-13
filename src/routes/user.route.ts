import { Response, Router } from "express";

import * as userController from "../controllers/users.controller";

import validateRequest from "../utils/validate";

import { createUserSchema } from "../validators/user.validator";

const router = Router();

/**
 * GET /api/users
 */
router.get("/", userController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get("/:id", userController.fetchById);

/**
 * POST /api/users
 */
router.post("/", validateRequest(createUserSchema), userController.create);

export default router;
