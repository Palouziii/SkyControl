import { Billet } from "../model/Billet";
import API from "./API";

export class BilletService {
   async getAll() {
      const res = await API.get("/billet");
      return res.data;
   }

   async add(data) {
      const ref_billet = "TK-" + Math.floor(Math.random() * 9000 + 1000 * Math.random());

      let prix = 450;
      if (data.classe === "First Class") prix = 1200;
      if (data.classe === "Business Class") prix = 800;

      const nouveauBillet = new Billet(
         ref_billet,
         data.nom,
         data.prenom,
         data.nationalite,
         data.ref_vol,
         data.classe,
         data.siege,
         prix,

      );
      console.log(nouveauBillet)

      return await API.post("/billet", nouveauBillet);
   }

   async remove(ref_billet) {
      const res = await API.delete(`/billet/${ref_billet}`);
      return res
   }

   async update(ref_billet, data) {
      const billetModifie = new BilletService(
         ref_billet,
         data.nom,
         data.prenom,
         data.nationalite,
         data.ref_vol,
         data.classe,
         data.siege,
         data.prix,
      );
      console.log(billetModifie)
      return await API.put(`/billet/${ref_billet}`, billetModifie);
   }
}

export default new BilletService();