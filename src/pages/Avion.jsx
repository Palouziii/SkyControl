import { useState } from "react";
import AvionCard from "../components/Avion/AvionCard";
import AvionForm from "../components/Avion/AvionForm";
import avionService from "../services/AvionService";

export default function Avion() {
  const [avions, setAvions] = useState(avionService.getAll());
  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    immatriculation: "",
    modele: "",
    compagnie: "",
    capacite: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (formData.immatriculation.length >= 6 && formData.capacite > 0) {
      avionService.add(formData);
      setAvions([...avionService.getAll()]);
      resetForm();
      setShowAdd(false);
    } else {
      console.log("Formulaire invalide");
    }
  };

  const resetForm = () => {
    setFormData({
      immatriculation: "",
      modele: "",
      compagnie: "",
      capacite: "",
    });
  };

const handleRemove = (immatriculation) => {
    const updatedList = avionService.remove(immatriculation);
    setAvions([...updatedList]); 
};

  return (
    <div className="avion-page-container rounded p-4">
      <header className="fleet-header d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-black text-uppercase tracking-tighter">
            Gestion Flotte
          </h1>
          <p className="text-secondary">
            Actuellement {avions.length} appareils en opération active
          </p>
        </div>
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          <i className={`bi bi-${showAdd ? "x-lg" : "plus-lg"}`}></i>
          {showAdd ? "ANNULER" : "PLANIFIER UN VOL"}
        </button>
      </header>

      {showAdd && (
        <AvionForm
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <AvionCard avions={avions} remove={handleRemove} />
    </div>
  );
}
