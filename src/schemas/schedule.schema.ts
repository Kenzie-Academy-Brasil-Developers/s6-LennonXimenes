import { z } from "zod";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive(),
    userId: z.number().positive()
});

const scheduleCreateSchema = scheduleSchema.omit({ id: true, userId: true });
const scheduleCreateWithoutIdSchema = scheduleSchema.omit({ id: true });
const scheduleReadSchema = scheduleSchema.array();
const scheduleUpdateSchema = scheduleCreateSchema.partial();

export { scheduleSchema, scheduleCreateWithoutIdSchema, scheduleUpdateSchema, scheduleReadSchema, scheduleCreateSchema };