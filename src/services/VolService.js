import { Vol } from "../model/Vol";
import API from "./API";

export class VolService {
   async getAll() {
      const res = await API.get("/vol");
      return res.data;
   }

   async add(data) {
      const newVol = new Vol(
         data.ref_vol,
         data.compagnie,
         data.depart,
         data.arrivé,
         data.date_depart,
         data.date_arrivé,
      );
      return await API.post("/vol", newVol);
   }

   async getByRefVol(ref_vol) {
      return API.get(`/vol/${ref_vol}`);
   }

   async remove(ref_vol) {
      return await API.delete(`/vol/${ref_vol}`);
   }

   async update(ref_vol, data) {
      const volModifie = new Vol(
         ref_vol,
         data.compagnie,
         data.depart,
         data.arrivé,
         data.date_depart,
         data.date_arrivé
      );
      return await API.put(`/vol/${ref_vol}`, volModifie);
   }
}

export default new VolService();