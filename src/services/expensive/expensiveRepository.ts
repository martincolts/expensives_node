import Expensive from "./expensive";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Expensive)
export default class ExpensiveRepository extends Repository<Expensive> {
    
    public findByName(name: string): Promise<Expensive[]>{
        return this.find({name});
    }

    public getAllExpensives(): Promise<Expensive[]> {
        return this.find({relations: ["category"]});
    }

    public getExpensiveById(id: number): Promise<Expensive> {
        return this.findOne(id, {relations: ["category"]});
    }
}