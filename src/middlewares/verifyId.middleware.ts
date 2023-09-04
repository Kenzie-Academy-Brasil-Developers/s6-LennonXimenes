import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundId: User | null = await userRepo.findOneBy({ id });

    if (!foundId) {
        throw new AppError("User not found", 404);
    }

    res.locals.foundId = foundId;

    return next();
};