import { z } from "zod";
import { realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema, realEstateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type iRealEstate = z.infer<typeof realEstateSchema>;
type iRealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type iRealEstateRead = z.infer<typeof realEstateReadSchema>;
type iRealEstateReturn = z.infer<typeof realEstateReturnSchema>;
type iRealEstateRepo = Repository<RealEstate>;

export { iRealEstate, iRealEstateCreate, iRealEstateRead, iRealEstateRepo, iRealEstateReturn };
