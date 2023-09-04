import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionCreate } from "../schemas";
import sessionController from "../controllers/session.controller";

export const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(sessionCreate), sessionController.loginSession);