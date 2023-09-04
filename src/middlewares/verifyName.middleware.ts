import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const name = req.body.name;

    const category: Category | null = await categoryRepo.findOneBy({ name });

    if (category) {
        throw new AppError("Category already exists", 409);
    }

    return next();
};