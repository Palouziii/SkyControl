import { Personnel } from "../model/Personnel";
import API from "./API";

export class PersonnelService {
   async getAll() {
      const res = await API.get("/personnel");
      return res.data;
   }

   async add(data) {
      const id_personnel = "ST-" + Math.floor(Math.random() * 9000 + 1000);
      const newPersonnel = new Personnel(
         id_personnel,
         data.nom.toUpperCase(),
         data.prenom,
         data.fonction,
         data.telephone
      );
      return await API.post("/personnel", newPersonnel);
   }

   async remove(id) {
      const res = await API.delete(`/personnel/${id}`);
      return res
   }

   async update(id, data) {
      const personnelModifie = new Personnel(
         id,
         data.nom.toUpperCase(),
         data.prenom,
         data.fonction,
         data.telephone
      );
      return await API.put(`/personnel/${id}`, personnelModifie);
   }
}


export default new PersonnelService();