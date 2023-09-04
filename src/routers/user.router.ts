import { Router } from "express";
import userController from "../controllers/user.controller";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post("",
    middlewares.validateBody(userCreateSchema),
    middlewares.verifyEmail,
    userController.createUser
);

userRouter.get("",
    middlewares.verifyToken,
    middlewares.verifyPermition,
    userController.readUser
);

userRouter.use("/:id", middlewares.verifyId, middlewares.verifyToken);

userRouter.patch("/:id",
    middlewares.validateBody(userUpdateSchema),
    middlewares.verifyPermition,
    userController.updateUser
);

userRouter.delete("/:id",
    middlewares.verifyPermition,
    userController.deleteUser
);