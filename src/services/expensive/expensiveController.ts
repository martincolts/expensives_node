import { Request } from "express";
import ExpensiveDTO from "./expensiveDTO";
import ExpensiveService from "./expensiveService";
import Expensive from "./expensive";



export default class ExpensiveController {

    private expensiveService: ExpensiveService;

    constructor() {
        this.expensiveService = new ExpensiveService();
    }

    public async getAllExpensives(): Promise<ExpensiveDTO[]> {
        return await this.expensiveService.getAllExpensive();
    }

    public async saveExpensive(expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        return await this.expensiveService.saveExpensive(expensiveDTO);
    }

    public async getExpensiveById(id: number): Promise<ExpensiveDTO> {
        return await this.expensiveService.getExpensiveById(id);
    }

    public async updateById(id: number, expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        return await this.expensiveService.updateById(id, expensiveDTO);
    }
}
