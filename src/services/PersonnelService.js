import { ListePersonnel } from "../data/FakeData";
import { Personnel } from "../model/Personnel";
import API from "./API";

export class PersonnelService {
   constructor() {
      this.personnels = ListePersonnel;
   }

   async getAll() {
      const res = await API.get("/personnel");
      return res.data;
   }

   async add(data) {
      const id_personnel = "ST-" + Math.floor(Math.random() * 9000 + 1000 + Math.random());
      const newPersonnel = new Personnel(
         id_personnel,
         data.nom,
         data.prenom,
         data.fonction,
         data.telephone
      );

      console.log(newPersonnel);
      

      const res = await API.post("/personnel", newPersonnel);
      return res;
   }

   remove(id_personnel) {
      this.personnels = this.personnels.filter(p => p.id_personnel !== id_personnel);
      return this.personnels;
   }
}

export default new PersonnelService();