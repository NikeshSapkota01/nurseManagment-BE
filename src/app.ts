import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import express, { NextFunction, Request, Response } from "express";

import routes from "./route";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("combined"));

app.use("/api", routes);

app.use((_req: Request, res: Response, next: NextFunction) => {
  const error = Object.assign(new Error("Api endpoint not found"), {
    status: 404,
  });
  next(error);
});

// error handling middleware
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: `Error: ${err.message}` });
});

export default app;
