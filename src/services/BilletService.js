import { ListeBillets } from "../data/FakeData";
import { Billet } from "../model/Billet"; // Assure-toi que le chemin est correct

export class BilletService {
  constructor() {
    this.billets = ListeBillets;
  }

  getAll() {
    return this.billets;
  }

   add(data) {
   const ref = "TKT-" + Math.floor(Math.random() * 9000 + 1000);
   const dateEmission = new Date().toISOString();
   
   let prixBase = 450;
   if (data.classe === "First Class") prixBase = 1200;
   if (data.classe === "Business Class") prixBase = 800;

   const nouveauBillet = new Billet(
      ref,                                
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