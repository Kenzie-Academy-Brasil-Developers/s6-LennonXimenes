import { z } from "zod";
import { scheduleCreateSchema, scheduleCreateWithoutIdSchema, scheduleReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type iScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type iScheduleCreateWithoutId = z.infer<typeof scheduleCreateWithoutIdSchema>;
type iScheduleRepo = Repository<Schedule>;
type iScheduleRead = z.infer<typeof scheduleReadSchema>;

export { iScheduleCreate, iScheduleCreateWithoutId, iScheduleRepo, iScheduleRead }