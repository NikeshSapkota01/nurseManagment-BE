import { Router } from "express";

import {
  createNurseSchema,
  updateNurseSchema,
} from "@validators/nurse.validator";
import validateRequest from "@utils/validate";
import * as nurseController from "@controllers/nurse.controller";
import { uploadPostImageDisk } from "@uploads/single-upload-disk";

const router = Router();

/**
 * GET /api/nurses
 */
router.get("/", nurseController.fetchAllNurse);

/**
 * GET /api/nurses/:nurseId
 */
router.get("/:nurseId", nurseController.fetchNurseById);

/**
 * POST /api/nurses
 */
router.post(
  "/",
  validateRequest(createNurseSchema),
  nurseController.createNurse
);

/**
 * PUT /api/nurses/:nurseId
 */
router.put(
  "/:nurseId",
  validateRequest(updateNurseSchema),
  nurseController.updateNurse
);

/**
 * POST /api/nurses/images
 */

router.post("/images", uploadPostImageDisk, nurseController.uploadImage);

/**
 * DELETE /api/nurses/:nurseId
 */
router.delete("/:nurseId", nurseController.deleteNurse);

export default router;
