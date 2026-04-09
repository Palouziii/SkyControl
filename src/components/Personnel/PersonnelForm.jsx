export default function PersonnelForm({ formData, setFormData, add, onCancel }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card shadow-sm mb-5 border-0 animate-slide-down bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4 d-flex justify-content-between align-items-center">
        <span>NOUVEAU COLLABORATEUR</span>
        <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
      </div>
      <div className="card-body p-4">
        <form className="row g-3" onSubmit={add}>
          <div className="col-md-3">
            <label className="label-form-prestige">NOM</label>
            <input
              type="text"
              name="nom"
              className="form-control-prestige"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="label-form-prestige">PRÉNOM</label>
            <input
              type="text"
              name="prenom"
              className="form-control-prestige"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">FONCTION</label>
            <select 
                className="form-control-prestige" 
                name="fonction" 
                value={formData.fonction} 
                onChange={handleChange}
                required
            >
              <option value="">Choisir...</option>
              <option value="Pilote">Pilote</option>
              <option value="Co-pilote">Co-pilote</option>
              <option value="Hôtesse">Hôtesse</option>
              <option value="Steward">Steward</option>
              <option value="Technicien">Technicien</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="label-form-prestige">TÉLÉPHONE</label>
            <input
              type="text"
              name="telephone"
              className="form-control-prestige"
              placeholder="Ex : 06 86 58 94 50"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
              ENREGISTRER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}