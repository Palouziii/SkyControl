import "../../css/VolCard.css";

export default function VolCard({ vols, edit, remove }) {
  const formatCity = (str) => (str ? str.split(" ")[0] : "");

  const formatCodeCity = (str) => {
    if (!str) return "";
    const match = str.match(/\((.*?)\)/);
    return match ? match[1] : str;
  };

  const formatFullDate = (str) => {
    if (!str) return "Date non conforme";
    const d = new Date(str);
    const jour = String(d.getDate()).padStart(2, "0");
    const mois = String(d.getMonth() + 1).padStart(2, "0");
    const annee = d.getFullYear();
    const heures = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${jour}/${mois}/${annee} ${heures}:${minutes}`;
  };

  const formatTime = (str) => {
    if (!str) return "--:--";
    const d = new Date(str);
    return (
      String(d.getHours()).padStart(2, "0") +
      ":" +
      String(d.getMinutes()).padStart(2, "0")
    );
  };

  return (
    <div className="vol-page-wrapper-premium p-4 rounded">
      <div className="row g-4">
        {vols.map((vol) => (
          <div className="col-12 col-md-6 col-lg-4" key={vol.ref_vol}>
            <div className="prestige-trip-card shadow-sm rounded-4 overflow-hidden border-0 position-relative">
              <div className="card-bg-image"></div>
              <div className="card-overlay"></div>
              <div className="card-action-top">
                <i className="bi bi-airplane-fill me-1"></i>
                <span>PARTIR</span>
              </div>

              <div className="card-content-wrapper position-relative">
                <div className="card-prestige-header d-flex justify-content-between align-items-center p-3 border-bottom border-white border-opacity-10">
                  <span className="compagnie-tag text-uppercase fw-extrabold text-white-50 small">
                    {vol.compagnie}
                  </span>
                  <span className="reg-number-vol fw-mono text-white px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-25 small shadow-sm range">
                    {vol.ref_vol}
                  </span>
                </div>

                <div className="card-prestige-body p-4 text-center text-white">
                  <div className="route-area-prestige d-flex justify-content-center align-items-center gap-2">
                    <div className="location">
                      <span className="display-5 fw-black d-block">
                        {formatCodeCity(vol.depart)}
                      </span>
                      <span className="text-uppercase small fw-bold text-white-50">
                        {formatCity(vol.depart)}
                      </span>
                    </div>

                    <i className="bi bi-airplane-engines-fill fs-2 text-primary opacity-75 px-2 animate-fly"></i>

                    <div className="location">
                      <span className="display-5 fw-black d-block">
                        {formatCodeCity(vol.arrivé)}
                      </span>
                      <span className="text-uppercase small fw-bold text-white-50">
                        {formatCity(vol.arrivé)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-prestige-footer p-3 bg-black bg-opacity-25 text-white">
                  <div className="d-flex justify-content-between align-items-center mb-3 text-center">
                    <div className="time-block">
                      <small
                        className="text-uppercase text-white-50 fw-bold d-block mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Décollage
                      </small>
                      <span className="h4 fw-black mb-0">
                        {formatTime(vol.date_depart)}
                      </span>
                    </div>

                    <div className="date-block px-3 border-start border-end border-white border-opacity-10">
                      <small
                        className="text-uppercase text-white-50 fw-bold d-block mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Date
                      </small>
                      <span className="small fw-bold">
                        {formatFullDate(vol.date_depart).split(" ")[0]}
                      </span>
                    </div>

                    <div className="time-block">
                      <small
                        className="text-uppercase text-white-50 fw-bold d-block mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Arrivée
                      </small>
                      <span className="h4 fw-black mb-0">
                        {formatTime(vol.date_arrivé)}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-2 border-top border-white border-opacity-10 pt-2">
                    <button className="action-btn circle-btn border-white border-opacity-25 text-white" onClick={() => edit(vol)}>
                      <i className="bi bi-sliders"></i>
                    </button>
                    <button
                      className="action-btn circle-btn delete border-danger border-opacity-50 text-danger"
                      onClick={() => remove(vol)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
