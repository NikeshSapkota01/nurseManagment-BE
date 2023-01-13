import { Response, Router } from "express";

import * as authController from "../controllers/auth.controller";

const router = Router();

/**
 * POST /api/auth/refresh
 */
router.post("/refresh", authController.refreshToken);

/**
 * POST /api/auth/login
 */
router.post("/login", authController.login);

export default router;
