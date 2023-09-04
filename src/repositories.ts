import { iAddressRepo, iCategoryRepo, iRealEstateRepo, iScheduleRepo, iUsersRepo } from "./interfaces";
import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";

const userRepo: iUsersRepo = AppDataSource.getRepository(User);
const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category);
const addressRepo: iAddressRepo = AppDataSource.getRepository(Address);
const realEstateRepo: iRealEstateRepo = AppDataSource.getRepository(RealEstate);
const scheduleRepo: iScheduleRepo = AppDataSource.getRepository(Schedule);


export { userRepo, categoryRepo, addressRepo, realEstateRepo, scheduleRepo };