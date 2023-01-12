import { Request, Response, Router } from "express";

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

export default router;
