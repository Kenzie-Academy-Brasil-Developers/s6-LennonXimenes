import { Request, Response } from "express";
import { RealEstate } from "../entities";
import realEstateService from "../services/realEstate.service";
import { iRealEstateRead } from "../interfaces";

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const createRealEstate: RealEstate = await realEstateService.createRealEstate(req.body);

    return res.status(201).json(createRealEstate);
}

const readRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const realEstate: iRealEstateRead | any = await realEstateService.readRealEstate();

    return res.status(200).json(realEstate);
}

export default { createRealEstate, readRealEstate };