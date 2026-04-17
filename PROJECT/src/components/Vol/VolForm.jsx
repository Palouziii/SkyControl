import { useEffect, useState } from "react";
import AvionService from "../../services/AvionService";

export default function VolForm({ 
   formData, 
   setFormData, 
   add, 
   onCancel, 
   onEdit, 
   showAvion
}) 
{

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [avions, setAvions] = useState([]);
    useEffect(() => {
      const loadVols = async () => {
        try {
          const data = await AvionService.getAll();
          setAvions(data || []);
        } catch (error) {
          console.error("Erreur lors du chargement des avions", error);
        }
      };
      if (showAvion) loadVols();
    }, [showAvion]);

  return (
    <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeInDown bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4 d-flex justify-content-between align-items-center">
         <span>
            {onEdit ? "MODIFICATION DU VOL" : "ENREGISTREMENT NOUVEAU VOL"}
         </span>
      <button type="button" className="btn-close btn-close-white mx-3" onClick={onCancel}></button>
      </div>
      
      <div className="card-body p-4">
        <form className="row g-4" onSubmit={add}>
          <div className="col-md-3">
            <label className="label-form-prestige">RÉF VOL</label>
            <input
              type="text"
              name="ref_vol"
              className="form-control-prestige"
              placeholder="Ex: AF-2024"
              value={formData.ref_vol}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">COMPAGNIE</label>
            <input
              type="text"
              name="compagnie"
              className="form-control-prestige"
              placeholder="Air France"
              value={formData.compagnie}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">DÉPART</label>
            <input
              type="text"
              name="depart"
              className="form-control-prestige"
              placeholder="Paris (CDG)"
              value={formData.depart}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">ARRIVÉE</label>
            <input
              type="text"
              name="arrivee"
              className="form-control-prestige"
              placeholder="New York (JFK)"
              value={formData.arrivee}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="label-form-prestige">DATE & HEURE DÉPART</label>
            <input
              type="datetime-local"
              name="date_depart"
              className="form-control-prestige"
              value={formData.date_depart}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="label-form-prestige">DATE & HEURE ARRIVÉE</label>
            <input
              type="datetime-local"
              name="date_arrivee"
              className="form-control-prestige"
              value={formData.date_arrivee}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label className="label-form-prestige">SÉLECTION D'UN AVION</label>
            <select
              className="form-control-prestige"
              name="immatriculation"
              value={formData.immatriculation}
              onChange={handleChange}
              required
            >
              <option value="">Choisir un Avion...</option>
              {avions.map((avion) => (
                <option key={avion.immatriculation} value={avion.immatriculation}>
                  {avion.immatriculation}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4 d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-bold rounded-3"
            >
            <span>{onEdit ? "MODIFIER LA PLANIFICATION" : "NOUVELLE PLANIFICATION"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}