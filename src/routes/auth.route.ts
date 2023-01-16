import { Router } from "express";

import * as authController from "@controllers/auth.controller";

import validateRequest from "@utils/validate";

import {
  createUserSessionSchema,
  createUserTokenSchema,
} from "@validators/auth.validator";

const router = Router();

/**
 * POST /api/auth/refresh
 */
router.post(
  "/refresh",
  validateRequest(createUserTokenSchema),
  authController.refreshToken
);

/**
 * POST /api/auth/login
 */
router.post(
  "/login",
  validateRequest(createUserSessionSchema),
  authController.login
);

export default router;
