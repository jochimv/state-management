import { makeAutoObservable } from "mobx";

class CounterStore {
    counter = 0;
    
    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    increase(value) {
        this.counter = this.counter + value;
    }
}

export const store = new CounterStore();