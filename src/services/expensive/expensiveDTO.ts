import Expensive from "./expensive";

export default class ExpensiveDTO {
    id?: number;
    name: string;
    description: string;

    constructor(other: Partial<ExpensiveDTO> = {}) {
        this.id = other.id;
        this.description = other.description ;
        this.name = other.name
    }

    static fromPartial (other: Partial<ExpensiveDTO>): ExpensiveDTO {
        return new ExpensiveDTO(other);
    }

    public toExpensive(): Expensive {
        let expensive: Expensive = new Expensive();
        expensive.id = this.id;
        expensive.description = this.description;
        expensive.name = this.name;
        return expensive;
    }
}