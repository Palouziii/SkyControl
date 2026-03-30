import { ListeAvions } from "../data/FakeData";
import { Avion } from "../model/Avion";

export class AvionService{
    constructor(){
        this.avions = ListeAvions;
    }

        getAll(){
            return this.avions
        }

        add(data) {
            const avion = new Avion(
            data.immatriculation,
            data.capacite,
            data.modele,
            data.compagnie,
        );
        this.avions.push(avion);
    }

    getByImmatriculation(immatriculation) {
        return this.avions.find((avion) => avion.immatriculation == immatriculation);
    }

    remove(immatriculation) {
        return this.avions.filter((avion) => avion.immatriculation != immatriculation);
    }
}

export default new AvionService()