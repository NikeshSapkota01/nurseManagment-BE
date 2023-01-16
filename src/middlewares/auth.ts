import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

interface MyRequest extends Request {
  user: any;
}

/**
 *
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const authenticateRequest = (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";

    if (!token) {
      res.statusCode = 401;
      return res.json({ message: "No token provided." });
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err: any, decoded: any) => {
        if (err) {
          res.statusCode = 401;
          return res.json({ message: "Unauthorized access!" });
        }

        req.user = decoded;
      }
    );

    next();
  } catch (err) {
    next(err);
  }
};
