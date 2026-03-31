import { ListeVols } from "../data/FakeData";
import { Vol } from "../model/Vol";

export class VolService{
    constructor(){
        this.vols = ListeVols;
    }

        getAll(){
            return this.vols
        }

        add(data) {
            const vol = new Vol(
                data.ref_vol,
                data.compagnie,
                data.depart,
                data.arrivé,
                data.date_depart,
                data.date_arrivé,
        );
        this.vols.push(vol);
        }

        getByRefVol(ref_vol){
            return this.vols.find(vol => vol.ref_vol == ref_vol)
        }

        remove(ref_vol){
            this.vols = this.vols.filter(vol => vol.ref_vol != ref_vol)
            return this.vols
        }
    
}

export default new VolService()