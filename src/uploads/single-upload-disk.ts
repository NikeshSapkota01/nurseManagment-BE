import multer from "multer";
import { Request } from "express";

import uuid from "@utils/uuid";

const multerStorage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, `./images`);
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    const ext = file.mimetype.split("/")[1];
    const filename = `nurse-${uuid()}-${Date.now()}.${ext}`;
    req.body.image = filename;
    cb(null, filename);
  },
});

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (!file.mimetype.startsWith("image")) {
    return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"));
  }

  cb(null, true);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 1024 * 1024 * 5, files: 1 },
});

export const uploadPostImageDisk = upload.single("nurseImage");
