import { Passager } from "../model/Passager";
import API from "./API";

export class ServicePassager {
   async getAll() {
      const res = await API.get("/passager");
      return res.data;
   }

   async add(data) {
      const id_passager = "PA-" + Math.floor(Math.random() * 9000 + 1000 * Math.random());
      const newPassager = new Passager(
         id_passager,
         data.nom.toUpperCase(),
         data.prenom,
         data.nationalite,
         data.mail,
         data.telephone
      );
      return await API.post("/passager", newPassager);
   }

   async remove(id) {
      const res = await API.delete(`/passager/${id}`);
      return res
   }

   async update(id, data) {
      const passagerModifie = new Passager(
         id,
         data.nom.toUpperCase(),
         data.prenom,
         data.nationalite,
         data.mail,
         data.telephone
      );
      return await API.put(`/passager/${id}`, passagerModifie);
   }
}

export default new ServicePassager();