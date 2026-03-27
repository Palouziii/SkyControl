import { ListeAvions } from "../data/FakeData";

export class AvionService{
    constructor(){
        this.avions = ListeAvions;
    }

        getAll(){
            return this.avions
        }
}

export default new AvionService()