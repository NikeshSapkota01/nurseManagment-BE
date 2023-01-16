import { AnySchema } from "yup";
import HttpStatus from "http-status-codes";
import { Request, Response, NextFunction } from "express";

/**
 * Function to validate request body through the provided schema.
 */
const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
      });

      return next();
    } catch (e: any) {
      return res.status(HttpStatus.BAD_REQUEST).send(e.errors);
    }
  };

export default validate;
