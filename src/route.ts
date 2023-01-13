import { Request, Response, Router } from "express";

import userRoutes from "./routes/user.route";
import authRoute from "./routes/auth.route";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (_req: Request, res: Response) => {
  res.json({
    AppName: process.env.APP_NAME,
  });
});

router.use("/auth", authRoute);
router.use("/users", userRoutes);

export default router;
