import { ListePersonnel } from "../data/FakeData";
import { Personnel } from "../model/Personnel";

export class PersonnelService {
  constructor() {
    this.personnels = ListePersonnel;
  }

  getAll() {
    return this.personnels;
  }

  add(data) {
    const id = "ST-" + Math.floor(Math.random() * 9000 + 1000);
    const nouveau = new Personnel(
      id,
      data.nom,
      data.prenom,
      data.fonction,
      data.telephone
    );
    this.personnels.push(nouveau);
  }

  remove(id_personnel) {
    this.personnels = this.personnels.filter(p => p.id_personnel !== id_personnel);
    return this.personnels;
  }
}

export default new PersonnelService();