import express from "express";
import { swaggerDocs, swaggerUi } from "./swagger";

const app = express();

app.use(express.json());
app.use(["/", "/api-docs"], swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
