import { ListePassagers } from "../data/FakeData";

export class ServicePassager{
    constructor(){
        this.passagers = ListePassagers;
    }

        getAll(){
            return this.passagers
        }
}

export default new ServicePassager()