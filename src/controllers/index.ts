import createUser from "./user.controller";
import readUser from "./user.controller";
import updateUser from "./user.controller"
import deleteUser from "./user.controller";
import loginSession from "./session.controller";
import createCategory from "./category.controller";
import readCategory from "./category.controller";
import createRealEstate from "./realEstate.cotroller";
import readRealEstate from "./realEstate.cotroller";
import retrieveCategory from "./category.controller";
import createSchedule from "./schedule.controller";

export default { createUser, readUser, updateUser, deleteUser, loginSession, createCategory, readCategory, createRealEstate, readRealEstate, retrieveCategory, createSchedule };