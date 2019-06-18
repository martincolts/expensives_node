import { Request } from "express";
import ExpensiveDTO from "./expensiveDTO";
import ExpensiveService from "./expensiveService";
import Expensive from "./expensive";

let expensiveService: ExpensiveService = new ExpensiveService();

export default class ExpensiveController {
    constructor() {
    }

    public async getAllExpensives(): Promise<ExpensiveDTO[]> {
        return await expensiveService.getAllExpensive();
    }

    public async saveExpensive(expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        return await expensiveService.saveExpensive(expensiveDTO);
    }

    public async getExpensiveById(id: number): Promise<ExpensiveDTO> {
        return await expensiveService.getExpensiveById(id);
    }

    public async updateById(id: number, expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        return await expensiveService.updateById(id, expensiveDTO);
    }
}
