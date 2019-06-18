import Expensive from "./expensive";
import ExpensiveRepository from "./expensiveRepository";
import ExpensiveDTO from "./expensiveDTO";

const expensiveRepository: ExpensiveRepository = new ExpensiveRepository();

export default class ExpensiveService {
    constructor() {}

    public async getAllExpensive(): Promise<ExpensiveDTO[]> {
        const expensives: Expensive[] = await expensiveRepository.getAllExpensives();
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
        const expensiveSaved: Expensive = await expensiveRepository.save(expensive);
        return new Promise(next => next(expensiveSaved.toExpensiveDTO()));
    }

    public async getExpensiveById(id: number): Promise<ExpensiveDTO> {
        const expensive: Expensive = await expensiveRepository.getExpensiveById(id);
        return new Promise(next => next(expensive.toExpensiveDTO()));
    }

    public async updateById(id: number, expensiveDTO: ExpensiveDTO): Promise<ExpensiveDTO> {
        let expensive: Expensive = expensiveDTO.toExpensive();
        expensive.id = id;
        expensive = await expensiveRepository.update(expensive);
        return new Promise(next => next(expensive.toExpensiveDTO()));
    }
}