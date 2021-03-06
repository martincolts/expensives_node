import { EntityRepository, Repository } from "typeorm";
import Category from "./category";

@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category> {
    
    public findByName(name: string): Promise<Category>{
        return this.findOne(name, {relations: ["expensives"]});
    }

    public findAll(): Promise<Category[]> {
        return this.find({relations: ["expensives"]});
    }
    
}