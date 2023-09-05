import { Address, Category, RealEstate } from "../entities";
import { iRealEstateCreate } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const createRealEstate = async (payload: iRealEstateCreate): Promise<RealEstate> => {
    const address: Address | number = addressRepo.create(payload.address);

    await addressRepo.save(address);

    const category: Category | any = await categoryRepo.findOneBy({ id: payload.categoryId });

    const created = { ...payload, address: address, category: category };

    const RealEstate: RealEstate = realEstateRepo.create(created);
    return await realEstateRepo.save(RealEstate);
};

export default { createRealEstate };