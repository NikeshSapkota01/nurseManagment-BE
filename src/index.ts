import cors from 'cors'
import express from "express";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const { PORT = 4000 } = process.env;

app.listen({ port: PORT }, (): void =>
  console.log(`\n🚀    Server is now running on http://localhost:${PORT}`)
);