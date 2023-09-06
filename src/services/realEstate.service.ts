import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { iRealEstateCreate, iRealEstateRead, iRealEstateReturn } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const createRealEstate = async (payload: iRealEstateCreate): Promise<RealEstate> => {
    const address: Address | number = addressRepo.create(payload.address);

    await addressRepo.save(address);

    const category: Category | any = await categoryRepo.findOneBy({ id: payload.categoryId });

    const created = { ...payload, address: address, category: category };

    const RealEstate: RealEstate = realEstateRepo.create(created);
    return await realEstateRepo.save(RealEstate);
};

const readRealEstate = async (): Promise<iRealEstateReturn> => {
    const realEstate: iRealEstateRead | any = await
        realEstateRepo.createQueryBuilder("realEstate").leftJoinAndSelect("realEstate.address", "address").getMany();

    return realEstate;
};

export default { createRealEstate, readRealEstate };