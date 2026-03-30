import { useState } from "react";
import "../../css/VolCard.css";
import VolService from "../../services/VolService";

export default function VolCard() {
  const [showAdd, setShowAdd] = useState(false);
  const vols = VolService.getAll();

  // Extraction propre des données pour l'affichage Premium
  const formatCity = (str) => str.split(" ")[0];
  const formatCode = (str) => str.match(/\((.*?)\)/)?.[1] || str;
  const formatTime = (str) => str.split(" ")[1];
  const formatDate = (str) => str.split(" ")[0];

  return (
    <div className="vol-page-wrapper-premium p-4 rounded">
      {/* HEADER SECTION */}
      <header className="page-header-prestige-vol d-flex justify-content-between align-items-center mb-5">
        <div className="title-area-vol">
          <h1 className="display-6 fw-black text-dark text-uppercase tracking-tighter mb-0">
            Les Liaisons d'Exception
          </h1>
          <p className="text-secondary opacity-75">
            Explorez et gérez votre collection de vols prestigieux.
          </p>
        </div>
        <div className="header-actions">
          <button
            className={`btn ${showAdd ? "btn-secondary" : "btn-dark"} px-4 py-2 fw-bold shadow-sm transition-all`}
            onClick={() => setShowAdd(!showAdd)}
          >
            {showAdd ? "ANNULER" : "+ PLANIFIER UN VOL"}
          </button>
        </div>
      </header>

      {/* FORMULAIRE D'AJOUT (Basé sur ton constructor Vol) */}
      {showAdd && (
        <div className="card shadow-sm mb-5 border-0 animate-slide-down bg-white rounded-4 overflow-hidden">
          <div className="card-header bg-dark text-white fw-bold py-3 px-4">
            NOUVELLE PLANIFICATION
          </div>
          <div className="card-body p-4">
            <form className="row g-4">
              <div className="col-md-3">
                <label className="label-form-prestige">RÉF VOL</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Ex: AF-2024"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">COMPAGNIE</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Air France"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">DÉPART</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="Paris (CDG)"
                />
              </div>
              <div className="col-md-3">
                <label className="label-form-prestige">ARRIVÉE</label>
                <input
                  type="text"
                  className="form-control-prestige"
                  placeholder="New York (JFK)"
                />
              </div>
              <div className="col-md-4">
                <label className="label-form-prestige">
                  DATE & HEURE DÉPART
                </label>
                <input
                  type="datetime-local"
                  className="form-control-prestige"
                />
              </div>
              <div className="col-md-4">
                <label className="label-form-prestige">
                  DATE & HEURE ARRIVÉE
                </label>
                <input
                  type="datetime-local"
                  className="form-control-prestige"
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
      )}

      {/* GRILLE DE CARTES */}
      <div className="row g-4">
        {vols.map((vol) => (
          <div className="col-12 col-md-6 col-lg-4" key={vol.ref_vol}>
            <div className="prestige-trip-card shadow-sm rounded-4 overflow-hidden border-0 bg-white position-relative">
              {/* BOUTON RÉSERVER (Flottant haut droit) */}
              <a href="#" className="card-action-top text-decoration-none">
                <span className="me-2 small fw-bold">RÉSERVER</span>
                <i className="bi bi-arrow-right"></i>
              </a>

              {/* CARD HEADER */}
              <div className="card-prestige-header d-flex justify-content-between align-items-center p-3 border-bottom bg-light-subtle">
                <span className="compagnie-tag text-uppercase fw-extrabold tracking-wider text-muted small">
                  {vol.compagnie}
                </span>
                <span className="reg-number-vol fw-mono text-primary px-3 py-1 rounded-pill bg-white shadow-sm border small">
                  {vol.ref_vol}
                </span>
              </div>

              {/* CARD BODY (Itinéraire Typographique) */}
              <div className="card-prestige-body p-4 text-center">
                <div className="route-area-prestige d-flex justify-content-center align-items-center gap-2 mb-2">
                  <div className="location-prestige">
                    <span className="airport-code-prestige display-5 fw-black text-dark d-block">
                      {formatCode(vol.depart)}
                    </span>
                    <span className="city-name-prestige text-uppercase fw-bold text-secondary small tracking-widest">
                      {formatCity(vol.depart)}
                    </span>
                  </div>

                  <div className="plane-divider px-3">
                    <i className="bi bi-airplane-engines-fill fs-2 text-primary opacity-50"></i>
                  </div>

                  <div className="location-prestige">
                    <span className="airport-code-prestige display-5 fw-black text-dark d-block">
                      {formatCode(vol.arrivé)}
                    </span>
                    <span className="city-name-prestige text-uppercase fw-bold text-secondary small tracking-widest">
                      {formatCity(vol.arrivé)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD FOOTER (Horaires & Dates) */}
              <div className="card-prestige-footer border-top pt-3 pb-3 px-4 bg-light d-flex justify-content-between align-items-center">
                <div className="time-info">
                  <span className="d-block small text-muted text-uppercase fw-bold opacity-50">
                    Décollage
                  </span>
                  <span className="fw-black text-dark">
                    {formatTime(vol.date_depart)}
                  </span>
                </div>
                <div className="time-info">
                  <span className="d-block small text-muted text-uppercase fw-bold opacity-50">
                    Atterissage
                  </span>
                  <span className="fw-black text-dark">
                    {formatTime(vol.date_arrivé)}
                  </span>
                </div>
                <div className="date-info text-end">
                  <span className="badge bg-white text-dark border-0 shadow-sm fw-bold py-2 px-3 rounded-3">
                    Le : {formatDate(vol.date_depart)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
