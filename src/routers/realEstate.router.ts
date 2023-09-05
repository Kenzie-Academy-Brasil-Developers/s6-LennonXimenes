import { Router } from "express";
import realEstateCotroller from "../controllers/realEstate.cotroller";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post("",
    middlewares.verifyToken,
    middlewares.verifyPermition,
    middlewares.verifyAddress,
    middlewares.validateBody(realEstateCreateSchema),
    realEstateCotroller.createRealEstate);

realEstateRouter.get("", realEstateCotroller.readRealEstate);