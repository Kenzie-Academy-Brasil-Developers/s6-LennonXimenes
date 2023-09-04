import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { iSessionCreate, iSessionReturn } from "../interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

const loginSession = async ({ email, password }: iSessionCreate): Promise<iSessionReturn> => {
    const foundUser: User | null = await userRepo.findOneBy({ email });

    if (!foundUser) throw new AppError("Invalid credentials", 401);

    const samePassword: boolean = await compare(password, foundUser.password);

    if (!samePassword) throw new AppError("Invalid credentials", 401);

    const token: string = sign(
        { admin: foundUser.admin },
        process.env.SECRET_KEY!,
        { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};

export default { loginSession };