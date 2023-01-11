import cors from "cors";
import express from "express";
import compression from "compression";
import morgan from "morgan";

require("dotenv").config();

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

const { PORT = 4000 } = process.env;

app.listen({ port: PORT }, (): void =>
  console.log(`\n🚀    Server is now running on http://localhost:${PORT}`)
);
