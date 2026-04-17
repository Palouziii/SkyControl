import { Avion } from "../model/Avion";
import API from "./API";

export class AvionService {
   async getAll() {
      const res = await API.get("/avion");
      return res.data;
   }

   async add(data) {
      const newAvion = new Avion(
         data.immatriculation,
         data.capacite,
         data.modele,
         data.compagnie
      );
      return await API.post("/avion", newAvion);
   }

   async getByImmatriculation(immatriculation) {
      const res = await API.get(`/avion/${immatriculation}`);
      return res.data;
   }

   async remove(immatriculation) {
      const res = await API.delete(`/avion/${immatriculation}`);
      return res;
   }

   async update(immatriculation, data) {
      const avionModifie = new Avion(
        immatriculation,
        data.capacite,
        data.modele,
        data.compagnie
    );
    return await API.put(`/avion/${immatriculation}`, avionModifie);
}
}

export default new AvionService()