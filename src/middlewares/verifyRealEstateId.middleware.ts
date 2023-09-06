import { NextFunction, Request, Response } from "express";
import { Category, RealEstate, User } from "../entities";
import { categoryRepo, realEstateRepo, userRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let realEstateId: number = Number(req.body.realEstateId);

    const foundRealEstateId: RealEstate | null = await realEstateRepo.findOneBy({ id: realEstateId });

    if (!foundRealEstateId) {
        throw new AppError("RealEstate not found", 404);
    }

    res.locals.realEstateId = foundRealEstateId;

    return next();
};