import { Request, Response } from "express";
import { RealEstate } from "../entities";
import realEstateService from "../services/realEstate.service";

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {
    const createRealEstate: RealEstate = await realEstateService.createRealEstate(req.body);

    return res.status(201).json(createRealEstate);
}

export default { createRealEstate };