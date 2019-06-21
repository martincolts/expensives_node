import Expensive from "./expensive";
import CategoryDTO from "../category/categoryDTO";

export default class ExpensiveDTO {
    id?: number;
    name: string;
    description: string;
    created: Date;
    price: number;
    categoryDTO: CategoryDTO;

    constructor(other: Partial<ExpensiveDTO> = {}) {
        this.id = other.id;
        this.description = other.description ;
        this.name = other.name;
        this.price = other.price;
        this.created = other.created;
        this.categoryDTO = other.categoryDTO;
    }

    static fromPartial (other: Partial<ExpensiveDTO>): ExpensiveDTO {
        return new ExpensiveDTO(other);
    }

    public toExpensive(): Expensive {
        let expensive: Expensive = new Expensive();
        expensive.id = this.id;
        expensive.description = this.description;
        expensive.name = this.name;
        expensive.created = new Date();
        expensive.price = this.price;
        console.log(this);
        console.log(expensive);
        expensive.category = this.categoryDTO.toCategory();
        console.log(expensive);
        return expensive;
    }
}