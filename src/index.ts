import express from "express";

import { usersRoutes } from "./routes/users.routes";
import swagger from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile))

export { app };
