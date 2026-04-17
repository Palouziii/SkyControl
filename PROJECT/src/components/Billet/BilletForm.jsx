import { useEffect, useState } from "react";
import VolService from "../../services/VolService";

export default function BilletForm({
  formData,
  setFormData,
  add,
  onCancel,
  onEdit,
  showAchat,
}) {
  const [vols, setVols] = useState([]);
  useEffect(() => {
    const loadVols = async () => {
      try {
        const data = await VolService.getAll();
        setVols(data || []);
      } catch (error) {
        console.error("Erreur lors du chargement des vols", error);
      }
    };
    if (showAchat) loadVols();
  }, [showAchat]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!showAchat) return null;

  return (
    <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeInDown bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4 d-flex justify-content-between align-items-center">
        <span>SÉLECTION DES OPTIONS DE VOYAGE</span>
        <button
          type="button"
          className="btn-close btn-close-white"
          onClick={onCancel}
        ></button>
      </div>
      <div className="card-body p-4">
        <form className="row g-4" onSubmit={add}>
          <div className="col-md-3">
            <label className="label-form-prestige">NOM DU PASSAGER</label>
            <input
              type="text"
              name="nom"
              className="form-control-prestige"
              placeholder="Ex: MARTIN"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">PRÉNOM</label>
            <input
              type="text"
              name="prenom"
              className="form-control-prestige"
              placeholder="Ex: Jean"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">NATIONALITÉ</label>
            <input
              type="text"
              name="nationalite"
              className="form-control-prestige"
              placeholder="Ex: FRANCE"
              value={formData.nationalite}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-3">
            <label className="label-form-prestige">SÉLECTION DU VOL</label>
            <select
              className="form-control-prestige"
              name="ref_vol"
              value={formData.ref_vol}
              onChange={handleChange}
              required
            >
              <option value="">Choisir un vol...</option>
              {vols.map((vol) => (
                <option key={vol.ref_vol} value={vol.ref_vol}>
                  {vol.ref_vol} - {vol.depart?.split(" ")[0]} / {vol.arrivé?.split(" ")[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label className="label-form-prestige">CLASSE</label>
            <select
              className="form-control-prestige"
              name="classe"
              value={formData.classe}
              onChange={handleChange}
              required
            >
              <option value="">Choisir...</option>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Economy">Economy</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="label-form-prestige">FRANCHISE BAGAGE</label>
            <select
              className="form-control-prestige"
              name="bagage"
              value={formData.bagage}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner le poids...</option>
              <option value="Cabine uniquement (≤ 12 Kg)">Cabine uniquement (≤ 12 Kg)</option>
              <option value="Soute Light (≤ 15 Kg)">Soute Light (≤ 15 Kg)</option>
              <option value="Soute Standard (≤ 23 Kg)">Soute Standard (≤ 23 Kg)</option>
              <option value="Soute Premium (≤ 32 Kg)">Soute Premium (≤ 32 Kg)</option>
            </select>
          </div>

          <div className="col-md-2">
            <label className="label-form-prestige">SIÈGE</label>
            <input
              type="text"
              name="siege"
              className="form-control-prestige"
              placeholder="Ex: 12A"
              value={formData.siege}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 d-flex align-items-end justify-content-end">
            <button
              type="submit"
              className="btn btn-primary px-5 py-2 fw-bold rounded-3 shadow-sm"
            >
              <i className="bi bi-cart-check me-2"></i>
              <span>
                  {onEdit ? "Modifier le billet" : "Acheter"}
               </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}