import { Router } from "express";
import categoryController from "../controllers/category.controller";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoryRouter: Router = Router();

categoryRouter.post("",
    middlewares.verifyToken,
    middlewares.verifyPermition,
    middlewares.verifyName,
    middlewares.validateBody(categoryCreateSchema),
    categoryController.createCategory
);

categoryRouter.get("", categoryController.readCategory);