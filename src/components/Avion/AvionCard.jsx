import "../../css/AvionCard.css";

export default function AvionCard({ avions, remove }) {
  return (
    <div className="fleet-grid">
      {avions.map((avion) => (
        <div
          className="fleet-card shadow-sm rounded-4 overflow-hidden border-0 position-relative"
          key={avion.immatriculation}
        >
          <div className="card-bg-image-avion"></div>
          <div className="card-overlay-avion"></div>

          <div className="fleet-card-inner position-relative">
            <div className="card-top d-flex justify-content-between align-items-center mb-4">
              <div className="compagnie-tag-avion text-uppercase fw-bold text-white-50">
                {avion.compagnie}
              </div>
              <div className="reg-number-avion fw-mono text-white px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-25 small">
                {avion.immatriculation}
              </div>
            </div>

            <div className="card-mid d-flex align-items-center gap-3 mb-4 text-white">
              <div className="plane-icon-wrapper-avion">
                <i className="bi bi-airplane-engines animate-float"></i>
              </div>
              <div className="model-info">
                <h3 className="display-6 fw-black mb-0">{avion.modele}</h3>
                <span className="status-indicator online text-success fw-bold small">
                  EN SERVICE
                </span>
              </div>
            </div>

            <div className="card-bottom text-white">
              <div className="capacity-info">
                <div className="progress-label d-flex justify-content-between small mb-2 fw-bold text-white-50">
                  <span>CAPACITÉ MAX</span>
                  <span>{avion.capacite} SIÈGES</span>
                </div>
                <div className="progress-bar-custom-avion mb-4">
                  <div
                    className="progress-fill-avion"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="card-actions-avion d-flex justify-content-end gap-2 border-top border-white border-opacity-10 pt-3">
                <button className="circle-btn-avion" title="Éditer">
                  <i className="bi bi-sliders"></i>
                </button>
                <button
                  className="circle-btn-avion delete"
                  title="Supprimer"
                  onClick={() => remove(avion.immatriculation)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
