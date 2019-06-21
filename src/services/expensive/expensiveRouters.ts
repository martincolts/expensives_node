import { Request, Response } from "express";
import ExpensiveController from "./expensiveController";
import ExpensiveDTO from "./expensiveDTO";
import CategoryDTO from "../category/categoryDTO";

function populateExpensiveDTO(req: Request): ExpensiveDTO {
  const expensiveDTO: ExpensiveDTO = new ExpensiveDTO();
  expensiveDTO.id = req.body.id;
  expensiveDTO.name = req.body.name;
  expensiveDTO.description = req.body.description;
  expensiveDTO.price = req.body.price;
  expensiveDTO.categoryDTO = new CategoryDTO();
  expensiveDTO.categoryDTO.id = req.body.categoryDTO.id;
  console.log(expensiveDTO);
  return expensiveDTO;
}

export default [
  {
    path: "/expensives",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const expensiveController: ExpensiveController = new ExpensiveController();
      res.send(await expensiveController.getAllExpensives());
    }
  },
  {
    path: "/expensives",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const expensiveController: ExpensiveController = new ExpensiveController();
      const expensiveDTO: ExpensiveDTO = populateExpensiveDTO(req);
      res.send(await expensiveController.saveExpensive(expensiveDTO));
    }
  },
  {
    path: "/expensives/:id",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const expensiveController: ExpensiveController = new ExpensiveController();
      res.send(await expensiveController.getExpensiveById(req.params.id));
    }
  },
  {
    path: "/expensives/:id",
    method: "put",
    handler: async (req: Request, res: Response) => {
      const expensiveController: ExpensiveController = new ExpensiveController();
      const expensiveDTO: ExpensiveDTO = populateExpensiveDTO(req);
      res.send(await expensiveController.updateById(req.params.id, expensiveDTO))
    }
  }
];