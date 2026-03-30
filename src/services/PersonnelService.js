import { ListePersonnel } from "../data/FakeData";

export class ServicePersonnel{
    constructor(){
        this.personnels = ListePersonnel;
    }

        getAll(){
            return this.personnels
        }
}

export default new ServicePersonnel()