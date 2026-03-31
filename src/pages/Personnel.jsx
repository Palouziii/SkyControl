import { useState } from "react";
import PersonnelCard from "../components/Personnel/PersonnelCard";
import PersonnelForm from "../components/Personnel/PersonnelForm";
import PersonnelService from "../services/PersonnelService";

export default function Personnel() {
  const [personnels, setPersonnels] = useState(PersonnelService.getAll());
  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    telephone: "",
  });

  const add = (e) => {
    e.preventDefault();
    PersonnelService.add(formData);
    setPersonnels([...PersonnelService.getAll()]);
    setShowAdd(false);
    resetForm();
  };

  const handleRemove = (id) => {
    const updated = PersonnelService.remove(id);
    setPersonnels([...updated]);
  };

  const resetForm = () => {
    setFormData({ nom: "", prenom: "", fonction: "", telephone: "" });
  };

  return (
    <div className="container-fluid p-4">
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="h3 fw-bold text-uppercase">Gestion du Personnel</h1>
          <div className="d-flex gap-4 mt-2">
            <div className="stat-simple">
              <span className="text-muted small text-uppercase fw-bold">
                Effectif Total
              </span>
              <p className="h4 fw-black mb-0 text-primary">
                {personnels.length}
              </p>
            </div>
          </div>
        </div>
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "ANNULER" : "+ RECRUTER UNE PERSONNE"}
        </button>
      </header>

      {showAdd && (
        <PersonnelForm
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <div className="row">
        <div className="col-12">
          <PersonnelCard personnels={personnels} remove={handleRemove} />
        </div>
      </div>
    </div>
  );
}
