import "../../css/VolCard.css";

export default function VolCard({ vols, remove }) {
  const formatCity = (str) => (str ? str.split(" ")[0] : "");
  
  const formatCode = (str) => {
    if (!str) return "";
    const match = str.match(/\((.*?)\)/);
    return match ? match[1] : str;
  };

  const formatFullDate = (str) => {
    const d = new Date(str);
    const jour = String(d.getDate()).padStart(2, '0');
    const mois = String(d.getMonth() + 1).padStart(2, '0'); 
    const annee = d.getFullYear();
    const heures = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return jour + "/" + mois + "/" + annee + " " + heures + ":" + minutes;
  };

  const formatTime = (str) => {
    const d = new Date(str);
    return String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0');
  };

  return (
    <div className="vol-page-wrapper-premium p-4 rounded">
      <div className="row g-4">
        {vols.map((vol) => (
          <div className="col-12 col-md-6 col-lg-4" key={vol.ref_vol}>
            <div className="prestige-trip-card shadow-sm rounded-4 overflow-hidden border-0 bg-white">
              
              <div className="card-prestige-header d-flex justify-content-between align-items-center p-3 border-bottom bg-light-subtle">
                <span className="compagnie-tag text-uppercase fw-extrabold text-muted small">
                  {vol.compagnie}
                </span>
                <span className="reg-number-vol fw-mono text-primary px-3 py-1 rounded-pill bg-white border small shadow-sm">
                  {vol.ref_vol}
                </span>
              </div>

              <div className="card-prestige-body p-4 text-center">
                <div className="route-area-prestige d-flex justify-content-center align-items-center gap-2">
                  <div className="location">
                    <span className="display-5 fw-black d-block">{formatCode(vol.depart)}</span>
                    <span className="text-uppercase small fw-bold text-secondary">{formatCity(vol.depart)}</span>
                  </div>
                  <i className="bi bi-airplane-engines-fill fs-2 text-primary opacity-50 px-2"></i>
                  <div className="location">
                    <span className="display-5 fw-black d-block">{formatCode(vol.arrivé)}</span>
                    <span className="text-uppercase small fw-bold text-secondary">{formatCity(vol.arrivé)}</span>
                  </div>
                </div>
              </div>

              <div className="card-prestige-footer border-top p-3 bg-light">
                <div className="d-flex justify-content-between align-items-center mb-2 text-center">
                  <div className="time-block">
                    <small className="text-uppercase text-muted fw-bold d-block">Décollage</small>
                    <span className="display-6 fw-black">{formatTime(vol.date_depart)}</span>
                  </div>
                  
                  <div className="date-block px-2">
                    <small className="text-uppercase text-muted fw-bold d-block">Le :</small>
                    <span className="small fw-bold text-dark">{formatFullDate(vol.date_depart)}</span>
                  </div>

                  <div className="time-block">
                    <small className="text-uppercase text-muted fw-bold d-block">Atterrissage</small>
                    <span className="display-6 fw-black">{formatTime(vol.date_arrivé)}</span>
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 border-top pt-2">
                  <button className="action-btn circle-btn"><i className="bi bi-sliders"></i></button>
                  <button className="action-btn circle-btn delete" onClick={() => remove(vol.ref_vol)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}