import { Response, Router } from "express";

const router = Router();

/**
 * GET /api/users
 */
router.get("/", (_, res: Response) => {
  res.send("TODO: userController.fetchAll");
});

/**
 * GET /api/users/:id
 */
router.get("/:id", (_, res: Response) => {
  res.send("TODO: userController.fetchById");
});

/**
 * POST /api/users
 */
router.post("/", (_, res: Response) => {
  res.send("TODO: userController.create");
});

export default router;
