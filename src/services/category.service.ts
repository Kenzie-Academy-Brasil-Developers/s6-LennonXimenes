import { Category } from "../entities";
import { iCategoryCreate, iCategoryRead } from "../interfaces";
import { categoryRepo } from "../repositories";
import { categoryReadSchema } from "../schemas";

const createCategory = async (payload: iCategoryCreate): Promise<Category> => {
    const category: Category = categoryRepo.create(payload);

    return await categoryRepo.save(category);
};

const readCategory = async (): Promise<iCategoryRead> => {
    return categoryReadSchema.parse(await categoryRepo.find());
};

const retrieveCategory = async (categoryId: number): Promise<Category | any> => {
    const category: Category | any = await
        categoryRepo.createQueryBuilder("categories").leftJoinAndSelect("categories.realEstate", "realEstate").where("categories.id = :categoryId", { categoryId: categoryId }).getOne();
};

export default { createCategory, readCategory, retrieveCategory };