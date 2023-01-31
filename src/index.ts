import "module-alias/register";

require("dotenv").config();
import app from "./app";

const { PORT } = process.env;

app.listen({ port: PORT }, (): void =>
  console.log(`\n🚀    Server is now running on http://localhost:${PORT}`)
);
