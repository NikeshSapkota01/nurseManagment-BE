import { Router } from "express";

import validateRequest from "@utils/validate";
import { authenticateRequest } from "@middlewares/auth";
import { createUserSchema } from "@validators/user.validator";
import * as userController from "@controllers/users.controller";

const router = Router();

/**
 * GET /api/users
 */
router.get("/", userController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get("/:id", authenticateRequest, userController.fetchById);

/**
 * POST /api/users
 */
router.post("/", validateRequest(createUserSchema), userController.create);

export default router;
