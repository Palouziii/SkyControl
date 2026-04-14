import { useEffect, useState } from "react";
import BilletCard from "../components/Billet/BilletCard";
import BilletForm from "../components/Billet/BilletForm";
import BilletService from "../services/BilletService";

export default function Billet() {
  const [billets, setBillets] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentImmat, setCurrentRef_billet] = useState(null);
  const [formData, setFormData] = useState({
        ref_billet: "",
        nom : "",
        prenom : "",
        nationalite : "",
        ref_vol : "",
        classe : "",
        siege : "",
        bagage : "",
        prix : "",
  });

  useEffect(() => {
    const load = async () => {
      const data = await BilletService.getAll();
      setBillets(data);
    };
    load();
  }, []);  

  const fetchBillets = async () => {
    const data = await BilletService.getAll();
    setBillets(data);
  };

  const add = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await BilletService.update(currentImmat, formData);
    } else {
      await BilletService.add(formData);
    }
    setShowAdd(false);
    await fetchBillets();
    resetForm();
  };

  const handleRemove = async (ref_billet) => {
    await BilletService.remove(ref_billet);
    await fetchBillets(); 
  };

  const handleEdit = (billet) => {
    setFormData({
      ref_billet: billet.ref_billet,
      nom: billet.nom,
      prenom: billet.prenom,
      nationalite: billet.nationalite,
      ref_vol: billet.ref_vol,
      classe: billet.classe,
      siege: billet.siege,
      bagage: billet.bagage,
      prix: billet.prix,
    });
    setCurrentRef_billet(billet.ref_billet);
    setIsEditing(true);
    setShowAdd(true);
  };

  const resetForm = () => {
    setFormData({
      ref_billet: "",
      nom: "",
      prenom: "",
      nationalite: "",
      ref_vol: "",
      classe: "",
      siege: "",
      bagage: "",
      prix: "",
    });
    setIsEditing(false);
    setCurrentRef_billet(null);
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
          onEdit={isEditing}

        />
      )}

      <div className="row">
        <div className="col-12">
          <BilletCard billets={billets} remove={handleRemove} edit={handleEdit}/>
        </div>
      </div>
    </div>
  );
}
