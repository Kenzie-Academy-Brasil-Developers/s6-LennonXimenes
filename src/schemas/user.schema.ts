import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
});

const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
});
const userWithoutPassword = userSchema.omit({ password: true });
const userUpdateSchema = userSchema.omit({ id: true, admin: true }).partial();
const userUpdateReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userWithoutPassword.array();

export { userSchema, userCreateSchema, userWithoutPassword, userReadSchema, userUpdateReturnSchema, userUpdateSchema };