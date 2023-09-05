import { Router } from "express";
import realEstateCotroller from "../controllers/realEstate.cotroller";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post("",
    middlewares.verifyToken,
    middlewares.verifyPermition,
    middlewares.validateBody(realEstateCreateSchema),
    realEstateCotroller.createRealEstate);