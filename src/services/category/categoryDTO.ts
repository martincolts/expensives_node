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

    public toCategory(): Category {
        let category: Category = new Category();
        this.populateCategory(category);
        return category;
    }

    private populateCategory(category: Category) {
        category.expensives = [];
        this.populateExpensives(category);
        category.id = this.id;
        category.name = this.name;
    }

    private populateExpensives (category: Category){
        if (this.expensives) {
            for (let expensive of this.expensives){
                category.expensives.push(expensive.toExpensive())
            }
        }
    }
}