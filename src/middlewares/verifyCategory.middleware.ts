import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { categoryRepo } from "../repositories";
import { Category } from "../entities";

export const verifyCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    const category: Category | null = await categoryRepo.findOneBy({ id });

    if (!category) {
        throw new AppError("Category not found", 404);
    }

    return next();
};