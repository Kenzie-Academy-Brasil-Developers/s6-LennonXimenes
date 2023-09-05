import { z } from "zod";
import { categorySchema } from "./category.schema";
import { addressSchema } from "./address.schema";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().positive().default(0).or(z.string()),
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string()
});

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true
}).extend({
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive(),
        city: z.string(),
        state: z.string().max(2)
    }),
    categoryId: z.number()
});

const realEstateReadSchema = realEstateSchema.array();
const realEstateReturnSchema = realEstateSchema.extend({
    address: addressSchema,
    category: categorySchema
});

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema };