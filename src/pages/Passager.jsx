import { useEffect, useState } from "react";
import PassagerCard from "../components/Passager/PassagerCard";
import PassagerForm from "../components/Passager/PassagerForm";
import PassagerService from "../services/PassagerService";


export default function Passager() {
  const [passagers, setPassagers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
     const load = async () => {
     const data = await PassagerService.getAll();
     console.log(data)
     setPassagers(data);
  }; 
  load()
  }, []);  

  const fetchPassagers = async () => {
    const data = await PassagerService.getAll();
    setPassagers(data);
  };

  const [formData, setFormData] = useState({ nom: "", prenom: "", nationalite: "", mail: "", telephone: "" });

  const add = async (e) => {
    e.preventDefault();
    await PassagerService.add(formData);
    setShowAdd(false);
    await fetchPassagers();
    resetForm();
  };

  const handleRemove = async (passager) => {
   console.log(passager);
   
    await PassagerService.remove(passager.id_passager)
    await fetchPassagers();
  };

  const resetForm = () => {
    setFormData({ nom: "", prenom: "", nationalite: "", mail: "", telephone: "" });
  };

  return (
    <div className="container-fluid p-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold text-dark text-uppercase">
            Gestion des Passagers
          </h1>
         <div className="stat-simple">
            <span className="text-muted small text-uppercase fw-bold">
               Effectif Total
            </span>
            <p className="h4 fw-black mb-0 text-primary">
               {passagers.length}
            </p>
         </div>
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