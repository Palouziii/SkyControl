import { useEffect, useState } from "react";
import PassagerCard from "../components/Passager/PassagerCard";
import PassagerForm from "../components/Passager/PassagerForm";
import PassagerService from "../services/PassagerService";


export default function Passager() {
  const [passagers, setPassagers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({ nom: "", prenom: "", nationalite: "", mail: "", telephone: "" });


  useEffect(() => {
     const load = async () => {
     const data = await PassagerService.getAll();
     setPassagers(data);
  }; 
  load()
  }, []);  

  const fetchPassagers = async () => {
    const data = await PassagerService.getAll();
    setPassagers(data);
  };

  const add = async (e) => {
  e.preventDefault();
   if (isEditing) { await PassagerService.update(currentId, formData) } 
   else { await PassagerService.add(formData) }
      setShowAdd(false);
      setIsEditing(false); 
      await fetchPassagers();
      resetForm();
   }

   const handleEdit = (passager) => {
   setFormData({
      nom: passager.nom,
      prenom: passager.prenom,
      nationalite: passager.nationalite,
      mail: passager.mail,
      telephone: passager.telephone
   });
   setCurrentId(passager.id_passager);
   setIsEditing(true);
   setShowAdd(true);
   };

  const handleRemove = async (passager) => {
   console.log(passager);
   
    await PassagerService.remove(passager.id_passager)
    await fetchPassagers();
  };

   const resetForm = () => {
   setFormData({ nom: "", prenom: "", nationalite: "", mail: "", telephone: "" });
   setIsEditing(false);
   setCurrentId(null);
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
          onEdit={isEditing}
        />
      )}

      <div className="row">
        <div className="col-12">
          <PassagerCard passagers={passagers} remove={handleRemove} edit={handleEdit} />
        </div>
      </div>
    </div>
  );
}