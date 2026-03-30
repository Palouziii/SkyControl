import { ListeBillets } from "../data/FakeData";

export class BilletService{
    constructor(){
        this.billets = ListeBillets;
    }

        getAll(){
            return this.billets
        }
}

export default new BilletService()