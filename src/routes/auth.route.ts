import { Response, Router } from "express";

const router = Router();

/**
 * POST /api/auth/refresh
 */
router.post("/refresh", (_, res: Response) => {
  res.send("TODO: refreshTokenController");
});

/**
 * POST /api/auth/login
 */
router.post("/login", (_, res: Response) => {
  res.send("TODO: loginController");
});

export default router;
