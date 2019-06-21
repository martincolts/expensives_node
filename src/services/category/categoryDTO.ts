import ExpensiveDTO from "../expensive/expensiveDTO";
import Category from "./category";

export default class CategoryDTO {
    id?: number;
    name: string;
    expensives: ExpensiveDTO[];

    constructor(other: Partial<CategoryDTO> = {}) {
        this.id = other.id;
        this.name = other.name;
        this.expensives = other.expensives;
    }

    static fromPartial(other: Partial<CategoryDTO>): CategoryDTO {
        return new CategoryDTO(other);
    }

    public toCategory() {
        let category: Category = new Category();
        category.expensives = [];
        if (this.expensives) {
            for (let expensive of this.expensives){
                category.expensives.push(expensive.toExpensive())
            }
        }
        category.id = this.id;
        category.name = this.name;
        return category;
    }
}