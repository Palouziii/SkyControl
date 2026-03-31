export default function VolForm({ formData, setFormData, add }) {
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card shadow-sm mb-5 border-0 animate-slide-down bg-white rounded-4 overflow-hidden">
      <div className="card-header bg-dark text-white fw-bold py-3 px-4">
        NOUVELLE PLANIFICATION
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
              name="arrivé"
              className="form-control-prestige"
              placeholder="New York (JFK)"
              value={formData.arrivé}
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
              name="date_arrivé"
              className="form-control-prestige"
              value={formData.date_arrivé}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-bold rounded-3"
            >
              PUBLIER LE VOL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}