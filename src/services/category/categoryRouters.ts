import { Request, Response } from "express";
import CategoryController from "./categoryController";
import CategoryDTO from "./categoryDTO";

function populateCategoryDTO (req: Request) {
    const categoryDTO: CategoryDTO = new CategoryDTO();
    categoryDTO.name = req.body.name;
    return categoryDTO;
}

export default [
    {
        path: "/categories",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const categoryController: CategoryController = new CategoryController();
            res.send(await categoryController.getAllCategories());
        }
    },{
        path: "/categories",
        method: "post",
        handler: async (req: Request, res: Response) => {
            const categoryController: CategoryController = new CategoryController();
            const categoryDTO: CategoryDTO = populateCategoryDTO(req);
            res.send(await categoryController.save(categoryDTO));
        }
    },{
        path: "/categories/:name",
        method: "get",
        handler: async (req: Request, res: Response) => {
            const categoryController: CategoryController = new CategoryController();
            res.send(await categoryController.getCategoryByName(req.params.name));
        }
    }

]