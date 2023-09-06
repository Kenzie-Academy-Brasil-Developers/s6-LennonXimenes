import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { categoryRepo } from "../repositories";
import { Category } from "../entities";

export const verifyCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundId: Category | null = await categoryRepo.findOneBy({ id });

    if (!foundId) {
        throw new AppError("Category not found", 404);
    }

    res.locals.foundId = foundId;

    return next();
};