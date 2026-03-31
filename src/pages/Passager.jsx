import { useState } from "react";
import PassagerCard from "../components/Passager/PassagerCard";
import PassagerForm from "../components/Passager/PassagerForm";
import PassagerService from "../services/PassagerService";

export default function Passager() {
  const [passagers, setPassagers] = useState(PassagerService.getAll());
  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    nationalite: "",
    mail: "",
    telephone: "",
  });

  const add = (e) => {
    e.preventDefault();
    PassagerService.add(formData);
    setPassagers([...PassagerService.getAll()]);
    setShowAdd(false);
    resetForm();
  };

  const handleRemove = (id) => {
    const updated = PassagerService.remove(id);
    setPassagers([...updated]);
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      prenom: "",
      nationalite: "",
      mail: "",
      telephone: "",
    });
  };

  return (
    <div className="container-fluid p-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark text-uppercase">
            Gestion des Passagers
          </h1>
          <p className="text-muted small">
            Annuaire et fiches signalétiques des voyageurs
          </p>
        </div>
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "ANNULER" : "+ NOUVEAU PASSAGER"}
        </button>
      </header>

      {showAdd && (
        <PassagerForm
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <div className="row">
        <div className="col-12">
          <PassagerCard passagers={passagers} remove={handleRemove} />
        </div>
      </div>
    </div>
  );
}
