import { Response, Router } from "express";

const router = Router();

/**
 * GET /api/nurses
 */
router.get("/", (_, res: Response) => {
  res.send("TODO: nurseController.fetchAll");
});

/**
 * GET /api/nurses/::nurseId
 */
router.get("/:nurseId", (_, res: Response) => {
  res.send("TODO: nurseController.fetchById");
});

/**
 * POST /api/nurses
 */
router.post("/", (_, res: Response) => {
  res.send("TODO: nurseController.create");
});

/**
 * PUT /api/nurses/::nurseId
 */
router.put("/:nurseId", (_, res: Response) => {
  res.send("TODO: nurseController.put");
});

/**
 * DELETE /api/nurses/::nurseId
 */
router.delete("/:nurseId", (_, res: Response) => {
  res.send("TODO: nurseController.delete");
});

export default router;
