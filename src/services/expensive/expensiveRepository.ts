import Expensive from "./expensive";

export default class ExpensiveRepository {

    expensives: Expensive[] = []

    constructor(){
        this.expensives = [
        Expensive.fromPartial({
            id: 1,
            name: "Expensive 1",
            description: "Description expensive 1"
        }),
        Expensive.fromPartial({
            id: 2,
            name: "Expensive 2",
            description: "Description expensive 2"
        })]
    }

    public async getAllExpensives(): Promise<Expensive[]> {
        return new Promise((next) => {
            next(this.expensives);
        })
    }

    public async save(expensive: Expensive): Promise<Expensive> {
        expensive.id = this.expensives[this.expensives.length-1].id + 1;
        this.expensives.push(expensive);
        return new Promise(next => next(expensive));
    }

    public async getExpensiveById(id: number): Promise<Expensive> {
        const expensive: Expensive = this.expensives.filter(next => next.id == id)[0];
        if (expensive) {
            return new Promise(next => next(expensive));
        }
    }

    public async update(expensive: Expensive): Promise<Expensive> {
        this.expensives = this.expensives.filter(next => next.id != expensive.id);
        this.expensives.push(expensive);
        return new Promise(next => next(expensive));
    }
}