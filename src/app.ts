import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import middlewares from "./middlewares";
import { userRouter } from "./routers/user.router";
import { categoryRouter, sessionRouter } from "./routers";
import { realEstateRouter } from "./routers/realEstate.router";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", sessionRouter);

app.use("/categories", categoryRouter);

app.use("/realEstate", realEstateRouter)

app.use(middlewares.handleErrors);

export default app;