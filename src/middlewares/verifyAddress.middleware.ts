import { NextFunction, Request, Response } from "express";
import { iAddressCreate } from "../interfaces";
import { Address } from "../entities";
import { addressRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const address: iAddressCreate | any = req.body.address;

    if (!address) {
        return next();
    };

    const foundAddress: Address | null = await addressRepo.findOne({
        where: {
            zipCode: address.zipCode,
            state: address.state,
            city: address.city,
            street: address.street,
            number: address.number
        }
    });

    if (foundAddress) {
        throw new AppError("Address already exists", 409);
    };

    return next();
};