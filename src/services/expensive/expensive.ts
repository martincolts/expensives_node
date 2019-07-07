import ExpensiveDTO from "./expensiveDTO";
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import Category from "../category/category";

@Entity()
export default class Expensive {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created: Date;

    @Column()
    price: number;

    @ManyToOne(type => Category, category => category.expensives)
    category: Category

    constructor(other: Partial<Expensive> = {}) {
        this.id = other.id;
        this.name = other.name;
        this.description = other.description;
        this.price = other.price;
        this.created = other.created;
        this.category = other.category;
    }

    static fromPartial(other: Partial<Expensive>): Expensive {
        return new Expensive(other)
    }

    public toExpensiveDTO(): ExpensiveDTO {
        let expensiveDTO: ExpensiveDTO = new ExpensiveDTO();
        expensiveDTO.id = this.id;
        expensiveDTO.description = this.description;
        expensiveDTO.name = this.name;
        expensiveDTO.created = this.created;
        expensiveDTO.price = this.price;
        if (this.category)
            expensiveDTO.categoryDTO = this.category.toCategoryDTO();
        return expensiveDTO;
    }
}