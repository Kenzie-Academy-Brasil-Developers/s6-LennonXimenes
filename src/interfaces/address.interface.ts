import { z } from "zod";
import { addressCreateSchema, addressReadSchema } from "../schemas";
import { Address } from "../entities";
import { Repository } from "typeorm";

type iAddressCreate = z.infer<typeof addressCreateSchema>;
type iAddressRead = z.infer<typeof addressReadSchema>;

type iAddressRepo = Repository<Address>;


export { iAddressCreate, iAddressRead, iAddressRepo };