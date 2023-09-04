import { User } from "../entities";
import { iUsersCreate, iUsersRead, iUsersReturn, iUsersUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userUpdateReturnSchema, userWithoutPassword } from "../schemas";

const createUser = async (payload: iUsersCreate): Promise<iUsersReturn> => {
    const user: User = userRepo.create(payload);

    await userRepo.save(user);

    return userWithoutPassword.parse(user);
};

const readUser = async (): Promise<iUsersRead> => {
    return userReadSchema.parse(await userRepo.find());
};

const updateUser = async (userId: string, payload: iUsersUpdate) => {
    const userFound = await userRepo.findOneBy({ id: Number(userId) });
    
    const userUp = await userRepo.save({ ...userFound, ...payload });

    return userUpdateReturnSchema.parse(userUp);
};

const deleteUser = async (user: User): Promise<void> => {
    const userId = user.id

    await userRepo.softDelete({ id: userId });
}


export default { createUser, readUser, updateUser, deleteUser };