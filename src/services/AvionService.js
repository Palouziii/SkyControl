import { ListeAvions } from "../data/FakeData";
import { Avion } from "../model/Avion";
import API from "./API";

export class AvionService {
   constructor() {
      this.avions = ListeAvions;
   }

   async getAll() {
      const res = await API.get("/avion");
      return res.data;
   }

   async add(data) {
      const nouveauAvion = new Avion(
         data.immatriculation,
         data.capacite,
         data.modele,
         data.compagnie
      );
      return await API.post("/avion", nouveauAvion);
   }

   async getByImmatriculation(immatriculation) {
      const res = await API.get(`/avion/${immatriculation}`);
      return res.data;
   }

   async remove(immatriculation) {
      const res = await API.delete(`/avion/${immatriculation}`);
      return res;
   }
}

export default new AvionService()