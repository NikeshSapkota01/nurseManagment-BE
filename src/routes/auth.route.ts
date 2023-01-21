import { Router } from "express";

import * as authController from "@controllers/auth.controller";

import validateRequest from "@utils/validate";

import { createUserSessionSchema } from "@validators/auth.validator";

const router = Router();

/**
 * POST /api/auth/refresh
 */
router.post("/refresh", authController.refreshToken);

/**
 * POST /api/auth/login
 */
router.post(
  "/login",
  validateRequest(createUserSessionSchema),
  authController.login
);

export default router;
