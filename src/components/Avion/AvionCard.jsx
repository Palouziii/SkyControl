import "../../css/AvionCard.css";

export default function AvionCard({ avions, remove }) {
  return (
    <div className="fleet-grid">
      {avions.map((avion) => (
        <div className="fleet-card" key={avion.immatriculation}>
          <div className="fleet-card-inner">
            <div className="card-top">
              <div className="compagnie-tag">{avion.compagnie}</div>
              <div className="reg-number">{avion.immatriculation}</div>
            </div>
            <div className="card-mid">
              <div className="plane-icon-wrapper">
                <i className="bi bi-airplane-engines"></i>
              </div>
              <div className="model-info">
                <h3>{avion.modele}</h3>
                <span className="status-indicator online">En service</span>
              </div>
            </div>
            <div className="card-bottom">
              <div className="capacity-info">
                <div className="progress-label">
                  <span>Capacité Max</span>
                  <span>{avion.capacite} PLACES</span>
                </div>
                <div className="progress-bar-custom">
                  <div
                    className="progress-fill"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="card-actions">
                <button className="action-btn circle-btn" title="Éditer">
                  <i className="bi bi-sliders"></i>
                </button>
                <button
                  className="action-btn circle-btn delete"
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
