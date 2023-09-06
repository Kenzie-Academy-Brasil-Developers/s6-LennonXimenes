import { Schedule } from "../entities";
import { iScheduleCreate } from "../interfaces";
import { scheduleRepo } from "../repositories";

const createSchedule = async (payload: iScheduleCreate): Promise<any> => {
    const schedule: Schedule = scheduleRepo.create(payload);

    return await scheduleRepo.save(schedule);
};

export default { createSchedule };