import { userSchema } from "./user.schema";

const sessionCreate = userSchema.pick({
    email: true,
    password: true
});

export { sessionCreate };