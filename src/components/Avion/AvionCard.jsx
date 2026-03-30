import avionService from "../../services/AvionService";
import "../../css/AvionCard.css";

export default function AvionCard() {
  const avions = avionService.getAll();

  return (
    <div className="avion-page-container rounded">
      <header className="fleet-header d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-black text-uppercase tracking-tighter">
            Gestion Flotte
          </h1>
          <p className="text-secondary">
            Actuellement {avions.length} appareils en opération active
          </p>
        </div>
        <button className="btn-premium">
          <i className="bi bi-plus-lg"></i> Nouvel Appareil
        </button>
      </header>

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
                      style={{ width: "85%" }}
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
                  >
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
