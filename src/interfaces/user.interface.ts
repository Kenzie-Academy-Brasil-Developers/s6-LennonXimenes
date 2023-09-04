import { z } from "zod";
import { QueryResult } from "pg";
import { userCreateSchema, userReadSchema, userSchema, userWithoutPassword } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type iUsers = z.infer<typeof userSchema>;

type iUsersCreate = z.infer<typeof userCreateSchema>;
type iUsersReturn = z.infer<typeof userWithoutPassword>;
type iUsersRead = z.infer<typeof userReadSchema>;

type iUsersUpdate = DeepPartial<User>;
type iUsersRepo = Repository<User>;
type iUsersResult = QueryResult<User>;

export { iUsers, iUsersResult, iUsersCreate, iUsersRead, iUsersReturn, iUsersRepo, iUsersUpdate };