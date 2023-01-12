import { Response, Router } from "express";

import * as userController from "../controllers/users.controller";

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
router.post("/", userController.create);

export default router;
