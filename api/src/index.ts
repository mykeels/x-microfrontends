import "reflect-metadata";

import "./controllers";

import { config } from "dotenv";
import express, { json, urlencoded } from "express";
import cors from "cors";

import { RegisterRoutes } from "./tsoa/routes";

config();

export function createExpressApp(): express.Express {
  const app = express();

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(
    cors({
      origin: ["http://localhost:4000", "http://localhost:4001"],
    })
  );

  RegisterRoutes(app);

  return app;
}

function serve(app: express.Express) {
  const port = process.env.PORT || 3333;

  app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
}

if (require.main === module) {
  const app = createExpressApp();
  serve(app);
}
