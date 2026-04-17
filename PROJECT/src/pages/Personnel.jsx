import { useEffect, useState } from "react";
import PersonnelCard from "../components/Personnel/PersonnelCard";
import PersonnelForm from "../components/Personnel/PersonnelForm";
import PersonnelService from "../services/PersonnelService";

export default function Personnel() {
   const [personnels, setPersonnels] = useState([]);
   const [showAdd, setShowAdd] = useState(false); 
   const [isEditing, setIsEditing] = useState(false);
   const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
     const load = async () => {
     const data = await PersonnelService.getAll();
     console.log(data);
     
     setPersonnels(data);
  }; 
  load()
  }, []);     
  
   const fetchPersonnels = async () => {
      const data = await PersonnelService.getAll();
      setPersonnels(data);
   }


  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    telephone: "",
  });

   const add = async (e) => {
   e.preventDefault();
   if (isEditing) {
      await PersonnelService.update(currentId, formData);
   } else {
      await PersonnelService.add(formData);
   }
   setShowAdd(false);
   await fetchPersonnels();
   resetForm();
   };

  const handleRemove = async (personnel) => {
    await PersonnelService.remove(personnel.id_personnel)
    await fetchPersonnels();
  };

  const handleEdit = (personnel) => {
  setFormData({
      nom: personnel.nom,
      prenom: personnel.prenom,
      fonction: personnel.fonction,
      telephone: personnel.telephone,
   });
   setCurrentId(personnel.id_personnel);
   setIsEditing(true);
   setShowAdd(true);
   };

   const resetForm = () => {
      setFormData({ nom: "", prenom: "", fonction: "", telephone: "" });
      setIsEditing(false);
      setCurrentId(null);
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
          onEdit={isEditing}
        />
      )}

      <div className="row">
        <div className="col-12">
          <PersonnelCard personnels={personnels} remove={handleRemove} edit={handleEdit} />
        </div>
      </div>
    </div>
  );
}
