import { Request, Response, Router } from "express";

import authRoute from "@routes/auth.route";
import userRoutes from "@routes/user.route";
import nurseRoute from "@routes/nurse.route";

import { authenticateRequest } from "@middlewares/auth";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    AppName: process.env.APP_NAME,
  });
});

router.use("/auth", authRoute);
router.use("/users", userRoutes);
router.use("/nurses", authenticateRequest, nurseRoute);

export default router;
