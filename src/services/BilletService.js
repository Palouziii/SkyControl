import { Billet } from "../model/Billet";
import API from "./API";

export class BilletService {
   async getAll() {
      const res = await API.get("/avion");
      return res.data;
   }

   add(data) {
      const ref_billet = "TK-" + Math.floor(Math.random() * 9000 + 1000);
      const dateEmission = new Date().toISOString();

      let prixBase = 450;
      if (data.classe === "First Class") prixBase = 1200;
      if (data.classe === "Business Class") prixBase = 800;

      const nouveauBillet = new Billet(
         ref_billet,
         data.nom + " " + data.prenom,
         data.ref_vol,
         data.classe,
         data.siege || "À confirmer",
         prixBase,
         dateEmission
      );

      this.billets.push(nouveauBillet);
   }

   remove(ref_billet) {
      this.billets = this.billets.filter((b) => b.ref_billet !== ref_billet);
      return this.billets;
   }
}

export default new BilletService();