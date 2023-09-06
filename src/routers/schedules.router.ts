import { Router } from "express";
import scheduleController from "../controllers/schedule.controller";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";

export const schedulesRouter: Router = Router();

schedulesRouter.post("",
    middlewares.verifyToken,
    middlewares.validateBody(scheduleCreateSchema),
    middlewares.verifyRealEstateId,
    scheduleController.createSchedule);

schedulesRouter.get("realEstate/:id");