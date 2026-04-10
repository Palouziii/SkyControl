import { useEffect, useState } from "react";
import AvionCard from "../components/Avion/AvionCard";
import AvionForm from "../components/Avion/AvionForm";
import AvionService from "../services/AvionService";

export default function Avion() {
  const [avions, setAvions] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentImmat, setCurrentImmatriculation] = useState(null);
  const [formData, setFormData] = useState({
    immatriculation: "",
    modele: "",
    compagnie: "",
    capacite: "",
  });

  useEffect(() => {
    const load = async () => {
      const data = await AvionService.getAll();
      setAvions(data);
    };
    load();
  }, []);

  const fetchAvions = async () => {
    const data = await AvionService.getAll();
    setAvions(data);
  };

  const add = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await AvionService.update(currentImmat, formData);
    } else {
      await AvionService.add(formData);
    }
    setShowAdd(false);
    await fetchAvions();
    resetForm();
  };

  const handleRemove = async (immatriculation) => {
    await AvionService.remove(immatriculation);
    await fetchAvions(); 
  };

  const handleEdit = (avion) => {
    setFormData({
      immatriculation: avion.immatriculation,
      modele: avion.modele,
      compagnie: avion.compagnie,
      capacite: avion.capacite,
    });
    setCurrentImmatriculation(avion.immatriculation);
    setIsEditing(true);
    setShowAdd(true);
  };

  const resetForm = () => {
    setFormData({ immatriculation: "", modele: "", compagnie: "", capacite: "" });
    setIsEditing(false);
    setCurrentImmatriculation(null);
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
            Actuellement {avions.length} dans la flotte
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
          onEdit={isEditing}
        />
      )}

      <div className="row">
        <div className="col-12">
          <AvionCard avions={avions} remove={handleRemove} edit={handleEdit}/>
        </div>
      </div>
    </div>
  );
}