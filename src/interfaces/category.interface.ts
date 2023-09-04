import { z } from "zod";
import { categoryCreateSchema, categoryReadSchema, categorySchema } from "../schemas";
import { Category } from "../entities";
import { Repository } from "typeorm";

type iCategory = z.infer<typeof categorySchema>;

type iCategoryCreate = z.infer<typeof categoryCreateSchema>;
type iCategoryRead = z.infer<typeof categoryReadSchema>;
type iCategoryRepo = Repository<Category>;


export { iCategory, iCategoryCreate, iCategoryRead, iCategoryRepo };