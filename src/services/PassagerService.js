import { ListePassagers } from "../data/FakeData";
import { Passager } from "../model/Passager";

export class ServicePassager {
  constructor() {
    this.passagers = ListePassagers;
  }

  getAll() {
    return this.passagers;
  }

  add(data) {
    const id = "PA-" + Math.floor(Math.random() * 9000 + 1000);
    const nouveauPassager = new Passager(
      id,
      data.nom,
      data.prenom,
      data.nationalite,
      data.mail,
      data.telephone
    );
    this.passagers.push(nouveauPassager);
  }

  remove(id_passsager) {
    this.passagers = this.passagers.filter(p => p.id_passsager !== id_passsager);
    return this.passagers;
  }
}

export default new ServicePassager();