import Expensive from "./expensive";
import ExpensiveRepository from "./expensiveRepository";
import ExpensiveDTO from "./expensiveDTO";
import { getCustomRepository } from "typeorm";
import CategoryRepository from "../category/categoryRepository";

export default class ExpensiveService {

    expensiveRepository: ExpensiveRepository;
    categoryRepository: CategoryRepository;

    constructor() {
        this.expensiveRepository = getCustomRepository(ExpensiveRepository);
        this.categoryRepository = getCustomRepository(CategoryRepository)
    }

    public async getAllExpensive(): Promise<ExpensiveDTO[]> {
        const expensives: Expensive[] = await this.expensiveRepository.getAllExpensives();
        let expensiveDTOs : ExpensiveDTO[] = [];
        expensives.forEach((expensive) => {
            expensiveDTOs.push(expensive.toExpensiveDTO());
        });
        return new Promise((promise) => {
            promise(expensiveDTOs);
        })
    }

    public async saveExpensive(expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        let expensive: Expensive = expensiveDTO.toExpensive();
        expensive.category = await this.categoryRepository.findOne(expensiveDTO.categoryDTO.id);
        let expensiveSaved: Expensive = await this.expensiveRepository.save(expensive);
        expensiveSaved = await this.expensiveRepository.getExpensiveById(expensiveSaved.id);
        return new Promise(next => next(expensiveSaved.toExpensiveDTO()));
    }

    public async getExpensiveById(id: number): Promise<ExpensiveDTO> {
        const expensive: Expensive = await this.expensiveRepository.getExpensiveById(id);
        console.log(expensive);
        return new Promise(next => next(expensive.toExpensiveDTO()));
    }

    public async updateById(id: number, expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        let expensiveRetrieved: Expensive = await this.expensiveRepository.findOne(id);
        this.updateEntity(expensiveDTO, expensiveRetrieved);
        await this.expensiveRepository.save(expensiveRetrieved)
        const expensiveUpdated: Expensive = await this.expensiveRepository.getExpensiveById(id);
        return new Promise(next => next(expensiveUpdated.toExpensiveDTO()));
    }

    private updateEntity(expensiveDTO: ExpensiveDTO, expensive: Expensive) {
    if (expensiveDTO.name)
        expensive.name = expensiveDTO.name;
    if (expensiveDTO.description) 
        expensive.description = expensiveDTO.description;
    if (expensiveDTO.categoryDTO)
        expensive.category = expensiveDTO.categoryDTO.toCategory();
    if (expensiveDTO.price)
        expensive.price = expensiveDTO.price;
    }
}