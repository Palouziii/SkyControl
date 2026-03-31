import { useState } from "react";
import VolCard from "../components/Vol/VolCard";
import VolService from "../services/VolService";
import VolForm from "../components/Vol/VolForm";

export default function Vol() {
  const [vols, setVols] = useState(VolService.getAll());
  const [formData, setFormData] = useState({
    ref_vol: "",
    compagnie: "",
    depart: "",
    arrivé: "",
    date_depart: "",
    date_arrivé: "",
  });

  const add = (e) => {
    e.preventDefault();
    VolService.add(formData);
    setVols([...VolService.getAll()]);
    resetForm();
    setShowAdd(false);
  };

  const resetForm = () => {
    setFormData({
      ref_vol: "",
      compagnie: "",
      depart: "",
      arrivé: "",
      date_depart: "",
      date_arrivé: "",
    });
  };

  const handleRemove = (ref_vol) => {
    const updatedList = VolService.remove(ref_vol);
    setVols([...updatedList]);
  };

  const [showAdd, setShowAdd] = useState(false);

  return (
    <>
      <header className="page-header-prestige-vol d-flex justify-content-between align-items-center mb-5">
        <div className="title-area-vol">
          <h1 className="display-6 fw-black text-dark text-uppercase tracking-tighter mb-0">
            Les Liaisons d'Exception
          </h1>
          <p className="text-secondary opacity-75">
            Explorez et gérez votre collection de vols prestigieux.
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
            {showAdd ? "ANNULER" : "+ CREE UN VOL"}
          </button>
        </div>
      </header>

      {showAdd && (
        <VolForm
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <VolCard vols={vols} remove={handleRemove} />
    </>
  );
}
