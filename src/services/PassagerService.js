import { ListePassagers } from "../data/FakeData";
import { Passager } from "../model/Passager";
import API from "./API";

export class ServicePassager {
   constructor() {
      this.passagers = ListePassagers;
   }

   async getAll() {
      const res = await API.get("/passager");
      return res.data;
   }

   async add(data) {
      const id_passager = "PA-" + Math.floor(Math.random() * 9000 + 1000);
      const nouveauPassager = new Passager(
         id_passager,
         data.nom.toUpperCase(),
         data.prenom,
         data.nationalite,
         data.mail,
         data.telephone
      );
      return await API.post("/passager", nouveauPassager);
   }

    async remove(id) {
      const res = await API.delete(`/passager/${id}`);
      return res
   }
}

export default new ServicePassager();