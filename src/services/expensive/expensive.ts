import ExpensiveDTO from "./expensiveDTO";
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Expensive {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    constructor(other: Partial<Expensive> = {}) {
        this.id = other.id;
        this.name = other.name;
        this.description = other.description;
    }

    static fromPartial(other: Partial<Expensive>): Expensive {
        return new Expensive(other)
    }

    public toExpensiveDTO(): ExpensiveDTO {
        let expensiveDTO: ExpensiveDTO = new ExpensiveDTO();
        expensiveDTO.id = this.id;
        expensiveDTO.description = this.description;
        expensiveDTO.name = this.name;
        return expensiveDTO;
    }
}