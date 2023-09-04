import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const body = req.body;

    const foundEmail: User | null = await userRepo.findOneBy({ email: body.email });

    if (foundEmail) {
        throw new AppError("Email already exists", 409);
    }

    return next();
};