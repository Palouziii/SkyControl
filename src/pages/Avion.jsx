import { useEffect, useState } from "react";
import AvionCard from "../components/Avion/AvionCard";
import AvionForm from "../components/Avion/AvionForm";
import avionService from "../services/AvionService";

export default function Avion() {
  const [avions, setAvions] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({
    immatriculation: "",
    modele: "",
    compagnie: "",
    capacite: "",
  });

  useEffect(() => {
    const load = async () => {
      const data = await avionService.getAll();
      setAvions(data);
    };
    load();
  }, []);

  const fetchAvions = async () => {
    const data = await avionService.getAll();
    setAvions(data);
  };

  const add = async (e) => {
    e.preventDefault();
    if (formData.immatriculation.length >= 6 && formData.capacite > 0) {
      await avionService.add(formData);
      setShowAdd(false);
      await fetchAvions(); 
      resetForm();
    } else {
      console.log("Formulaire invalide");
    }
  };

  const handleRemove = async (immatriculation) => {
    await avionService.remove(immatriculation);
    await fetchAvions(); 
  };

  const resetForm = () => {
    setFormData({
      immatriculation: "",
      modele: "",
      compagnie: "",
      capacite: "",
    });
  };

  return (
    <div className="avion-page-container rounded p-4">
      <header className="fleet-header d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-black text-uppercase tracking-tighter">
            Gestion Flotte
          </h1>
          <div className="stat-simple">
            <span className="text-muted small text-uppercase fw-bold">
               Effectif Total
            </span>
            <p className="h4 fw-black mb-0 text-primary">
               {avions.length}
            </p>
          </div>
          <p className="text-secondary">
            Actuellement {avions.length} appareils en opération active
          </p>
        </div>
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "ANNULER" : "+ AJOUTER UN AVION"}
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

      <div className="row">
        <div className="col-12">
          <AvionCard avions={avions} remove={handleRemove} />
        </div>
      </div>
    </div>
  );
}