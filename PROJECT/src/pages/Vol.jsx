import { useState, useEffect } from "react"; 
import VolCard from "../components/Vol/VolCard";
import VolForm from "../components/Vol/VolForm";
import VolService from "../services/VolService";

export default function Vol() {
  const [vols, setVols] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRef, setCurrentRef_vol] = useState(null);
  const [formData, setFormData] = useState({
    ref_vol: "",
    compagnie: "",
    depart: "",
    arrivee: "",
    date_depart: "",
    date_arrivee: "",
    immatriculation: ""
  });

  useEffect(() => {
     const load = async () => {
     const data = await VolService.getAll();
     setVols(data);
  }; 
  load()
  }, []); 

  const fetchVols = async () => {
    const data = await VolService.getAll();
    setVols(data);
  };

  const add = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await VolService.update(currentRef, formData);
    } else {
      await VolService.add(formData);
    }
    setShowAdd(false);
    await fetchVols(); 
    resetForm();
  };

  const resetForm = () => {
    setFormData({ 
      ref_vol: "", 
      compagnie: "", 
      depart: "", 
      arrivee: "", 
      date_depart: "", 
      date_arrivee: "" ,
      immatriculation: ""
    });
    setIsEditing(false);
    setCurrentRef_vol(null);
  };

  const handleRemove = async (vol) => {
        await VolService.remove(vol.ref_vol);
        await fetchVols();
  };

  const handleEdit = (vol) => {
    setFormData({
      ref_vol: vol.ref_vol,
      compagnie: vol.compagnie,
      depart: vol.depart,
      arrivee: vol.arrivee,
      date_depart: vol.date_depart,
      date_arrivee: vol.date_arrivee,
      immatriculation: vol.immatriculation,
    });
    setCurrentRef_vol(vol.ref_vol);
    setIsEditing(true);
    setShowAdd(true);
  };

  return (
    <div className="container-fluid"> 
      <header className="page-header-prestige-vol d-flex justify-content-between align-items-center mb-5">
        <div className="title-area-vol">
          <h1 className="display-6 fw-black text-dark text-uppercase tracking-tighter mb-0">
            Les Liaisons d'Exception
          </h1>
          <p className="text-secondary opacity-75">
            Explorez et gérez votre collection de vols prestigieux ({vols.length}).
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-premium" onClick={() => {
            if(showAdd) resetForm();
            setShowAdd(!showAdd);
          }}>
            {showAdd ? "ANNULER" : "+ CRÉER UN VOL"}
          </button>
        </div>
      </header>

      {showAdd && (
        <VolForm
          formData={formData}
          setFormData={setFormData}
          add={add}
          onCancel={() => { setShowAdd(false); resetForm(); }}
          onEdit={isEditing}
          showAvion={showAdd}
        />
      )}

      <VolCard vols={vols} remove={handleRemove} edit={handleEdit} />
    </div>
  );
}