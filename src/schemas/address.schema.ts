import { z } from "zod";

const addressSchema = z.object({
    id: z.number().positive(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive(),
    city: z.string(),
    state: z.string().max(2)
})

const addressCreateSchema = addressSchema.omit({ id: true });
const addressReadSchema = addressSchema.array();

export { addressSchema, addressCreateSchema, addressReadSchema };