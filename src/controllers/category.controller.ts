import { Request, Response } from "express";
import { Category } from "../entities";
import categoryService from "../services/category.service";
import { iCategoryRead } from "../interfaces";

const createCategory = async (req: Request, res: Response): Promise<Response> => {
    const category: Category = await categoryService.createCategory(req.body);

    return res.status(201).json(category);
};

const readCategory = async (req: Request, res: Response): Promise<Response> => {
    const categories: iCategoryRead = await categoryService.readCategory();

    return res.status(200).json(categories);
};

const retrieveCategory = async (req: Request, res: Response): Promise<Response> => {
    const id: number = res.locals.foundId.id

    const retrieve: Category = await categoryService.retrieveCategory(id);

    return res.status(200).json(retrieve);
}
export default { createCategory, readCategory, retrieveCategory };