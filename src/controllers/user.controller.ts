import { Request, Response } from "express";
import userService from "../services/user.service";
import { iUsersReturn, iUsersUpdate } from "../interfaces";
import { User } from "../entities";

const createUser = async (req: Request, res: Response): Promise<Response> => {
    const user: iUsersReturn = await userService.createUser(req.body);

    return res.status(201).json(user);
};

const readUser = async (req: Request, res: Response): Promise<Response> => {
    const users = await userService.readUser();

    return res.status(200).json(users);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const payload: iUsersUpdate = req.body;

    const user = await userService.updateUser(req.params.id, payload);

    return res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    await userService.deleteUser(res.locals.foundId);

    return res.status(204).json();
};


export default { createUser, readUser, updateUser, deleteUser };