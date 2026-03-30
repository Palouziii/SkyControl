import { ListeVols } from "../data/FakeData";

export class ServiceVol{
    constructor(){
        this.vols = ListeVols;
    }

        getAll(){
            return this.vols
        }
}

export default new ServiceVol()