import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Expensive from "../expensive/expensive";
import CategoryDTO from "./categoryDTO";

@Entity()
export default class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Expensive, expensive => expensive.category)
    expensives: Expensive[]

    constructor(other: Partial<Category> = {}) {
        this.id = other.id;
        this.name = other.name;
    }

    static fromPartial(other: Partial<Category>): Category {
        return new Category(other);
    }

    public toCategoryDTO() {
        let categoryDTO: CategoryDTO = new CategoryDTO();
        categoryDTO.id = this.id;
        categoryDTO.name = this.name;
        return categoryDTO;        
    }
}