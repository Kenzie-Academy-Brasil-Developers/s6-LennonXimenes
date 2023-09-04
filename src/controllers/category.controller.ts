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

export default { createCategory, readCategory };