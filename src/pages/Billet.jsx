import { useState } from "react";
import BilletCard from "../components/Billet/BilletCard";
import BilletForm from "../components/Billet/BilletForm";
import BilletService from "../services/BilletService";

export default function Billet() {
  const [billets, setBillets] = useState(BilletService.getAll());
  const [showAdd, setShowAdd] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    nationalite: "",
    ref_vol: "",
    classe: "",
    bagage: "",
    siege: "",
  });

  const add = (e) => {
    e.preventDefault();
    BilletService.add(formData);
    setBillets([...BilletService.getAll()]);
    setShowAdd(false);
    resetForm();
  };

  const handleRemove = (ref) => {
    const updated = BilletService.remove(ref);
    setBillets([...updated]);
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      prenom: "",
      nationalite: "",
      ref_vol: "",
      classe: "",
      bagage: "",
      siege: "",
    });
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-dark text-uppercase">Billetterie</h1>
          <p className="text-muted small">
            Gestion administrative et émission de billets
          </p>
        </div>
        <button className="btn-premium" onClick={() => setShowAdd(!showAdd)}>
          {showAdd ? "ANNULER" : "ACHETER UN BILLET"}
        </button>
      </div>

      {showAdd && (
        <BilletForm
          showAchat={showAdd}
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => setShowAdd(false)}
        />
      )}

      <div className="row">
        <div className="col-12">
          <BilletCard billets={billets} remove={handleRemove} />
        </div>
      </div>
    </div>
  );
}
