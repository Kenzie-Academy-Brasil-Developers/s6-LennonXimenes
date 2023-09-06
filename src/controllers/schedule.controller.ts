import { Request, Response } from "express";
import scheduleService from "../services/schedule.service";

const createSchedule = async (req: Request, res: Response): Promise<Response> => {
    const schedule: any = await scheduleService.createSchedule(req.body);

    return res.status(201).json(schedule);
};

export default { createSchedule };
