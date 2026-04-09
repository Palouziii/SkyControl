export default function PassagerForm({ formData, setFormData, add, onCancel }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card shadow-sm mb-5 border-0 animate__animated animate__fadeInDown bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4 d-flex justify-content-between align-items-center">
        <span>ENREGISTREMENT NOUVEAU PASSAGER</span>
        <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
      </div>
      <div className="card-body p-4">
        <form className="row g-4" onSubmit={add}>
          <div className="col-md-3">
            <label className="label-form-prestige">NOM</label>
            <input
              type="text"
              name="nom"
              className="form-control-prestige"
              placeholder="Ex: DOE"
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
              placeholder="Ex: John"
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
              placeholder="Ex: Française"
              value={formData.nationalite}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="label-form-prestige">EMAIL</label>
            <input
              type="email"
              name="mail"
              className="form-control-prestige"
              placeholder="john@example.com"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
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
          <div className="col-md-9 d-flex align-items-end justify-content-end">
            <button type="submit" className="btn btn-primary px-5 py-2 fw-bold rounded-3 shadow-sm">
              CRÉER LA FICHE PASSAGER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}