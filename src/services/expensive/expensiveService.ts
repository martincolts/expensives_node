import Expensive from "./expensive";
import ExpensiveRepository from "./expensiveRepository";
import ExpensiveDTO from "./expensiveDTO";
import { getCustomRepository } from "typeorm";

export default class ExpensiveService {

    expensiveRepository: ExpensiveRepository;

    constructor() {
        this.expensiveRepository = getCustomRepository(ExpensiveRepository);
    }

    public async getAllExpensive(): Promise<ExpensiveDTO[]> {
        const expensives: Expensive[] = await this.expensiveRepository.getAllExpensives();
        let expensiveDTOs : ExpensiveDTO[] = [];
        expensives.forEach((expensive) => {
            expensiveDTOs.push(expensive.toExpensiveDTO());
        })
        return new Promise((promise) => {
            promise(expensiveDTOs);
        })
    }

    public async saveExpensive(expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        const expensive: Expensive = expensiveDTO.toExpensive();
        const expensiveSaved: Expensive = await this.expensiveRepository.save(expensive);
        return new Promise(next => next(expensiveSaved.toExpensiveDTO()));
    }

    public async getExpensiveById(id: number): Promise<ExpensiveDTO> {
        const expensive: Expensive = await this.expensiveRepository.findOne(id);
        return new Promise(next => next(expensive.toExpensiveDTO()));
    }

    public async updateById(id: number, expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        let expensiveRetrieved: Expensive = await this.expensiveRepository.findOne(id);
        expensiveRetrieved.name = expensiveDTO.name;
        expensiveRetrieved.description = expensiveDTO.description;
        return this.expensiveRepository.save(expensiveRetrieved.toExpensiveDTO());
        
    }
}