export default function AvionForm({ formData, setFormData, add, onCancel, onEdit }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card shadow-sm mb-5 border-0 animate-slide-down bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4 text-uppercase tracking-wider d-flex justify-content-between align-items-center">
        <span>{onEdit ? "Modification de l'appareil" : "Enregistrement d'un nouvel appareil"}</span>
        <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
      </div>
      <div className="card-body p-4">
        <form className="row g-4 align-items-end" onSubmit={add}>
          <div className="col-md-3">
            <label className="label-form-prestige">IMMATRICULATION</label>
            <input
              type="text"
              name="immatriculation"
              className="form-control-prestige"
              placeholder="Ex: A6-EEO"
              value={formData.immatriculation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">MODÈLE D'APPAREIL</label>
            <input
              type="text"
              name="modele"
              className="form-control-prestige"
              placeholder="Ex: Airbus A380"
              value={formData.modele}
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
              placeholder="Ex: Emirates"
              value={formData.compagnie}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">CAPACITÉ CLIENTS</label>
            <input
              type="number"
              name="capacite"
              className="form-control-prestige"
              placeholder="Ex: 525"
              value={formData.capacite}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 text-end">
            <button type="submit" className={`btn ${onEdit ? 'btn-warning' : 'btn-primary'} px-5 py-2 fw-bold rounded-3 shadow-sm`}>
              {onEdit ? "MODIFIER" : "AJOUTER"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}