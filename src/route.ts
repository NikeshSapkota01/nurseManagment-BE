import { Request, Response, Router } from "express";

import userRoutes from "./routes/user.route";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "this is a get request",
  });
});

router.use("/users", userRoutes);

export default router;
