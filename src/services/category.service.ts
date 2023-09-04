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

export default { createCategory, readCategory };