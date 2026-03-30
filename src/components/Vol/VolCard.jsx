import { useState } from "react";
import "../../css/VolCard.css";

export default function VolCard() {
  const [showFilters, setShowFilters] = useState(false);

  // Simulation de données basées sur ton MCD
  const vols = [
    {
      ref: "AF-2024",
      compagnie: "Air France",
      depart: "CDG",
      nom_depart: "Paris",
      arrivee: "JFK",
      nom_arrivee: "New York",
      heure_dep: "10:30",
      heure_arr: "14:00 (J+1)",
      prix: "1 250 €",
      avion: "Airbus A350",
      duree: "7h 30min",
    },
    {
      ref: "EK-088",
      compagnie: "Emirates",
      depart: "DXB",
      nom_depart: "Dubaï",
      arrivee: "CDG",
      nom_arrivee: "Paris",
      heure_dep: "08:15",
      heure_arr: "13:45",
      prix: "980 €",
      avion: "Boeing 777",
      duree: "7h 30min",
    },
    {
      ref: "BA-009",
      compagnie: "British Airways",
      depart: "LHR",
      nom_depart: "Londres",
      arrivee: "SYD",
      nom_arrivee: "Sydney",
      heure_dep: "11:00",
      heure_arr: "06:15 (J+2)",
      prix: "2 100 €",
      avion: "Airbus A380",
      duree: "22h 15min",
    },
  ];

  return (
    <div className="vol-page-wrapper-premium p-4">
      {/* 1. Header Inspirant (Vibe Elite) */}
      <header className="page-header-prestige-vol d-flex justify-content-between align-items-center mb-5">
        <div className="title-area-vol">
          <h1 className="display-6 fw-black text-dark text-uppercase tracking-tighter mb-0">
            Les Liaisons d'Exception
          </h1>
          <p className="text-secondary opacity-75">
            Explorez notre collection de vols directs vers les destinations les
            plus prestigieuses.
          </p>
        </div>
        <div className="header-actions d-flex gap-3">
          <button
            className="btn-prestige-dark px-4 py-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className={`bi bi-${showFilters ? "x-lg" : "sliders"} me-2`}></i>{" "}
            {showFilters ? "Fermer" : "Filtres"}
          </button>
        </div>
      </header>

      {/* 2. Barre de Recherche/Filtres Epurée */}
      {showFilters && (
        <div className="search-bar-prestige rounded-4 p-4 mb-5 shadow-sm animate__animated animate__fadeIn">
          <form className="row g-3 align-items-center">
            <div className="col-md-3">
              <label className="label-elite-vol">Origine</label>
              <input
                type="text"
                className="form-control-prestige-vol"
                placeholder="Ex: Paris (CDG)"
              />
            </div>
            <div className="col-md-3">
              <label className="label-elite-vol">Destination</label>
              <input
                type="text"
                className="form-control-prestige-vol"
                placeholder="Ex: New York (JFK)"
              />
            </div>
            <div className="col-md-3">
              <label className="label-elite-vol">Date</label>
              <input type="date" className="form-control-prestige-vol" />
            </div>
            <div className="col-md-3 d-flex align-items-end">
              <button
                type="submit"
                className="btn-prestige-blue w-100 py-2 fw-bold"
              >
                RECHERCHER
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 3. Grille de Cartes d'Embarquement (La Vitrine) */}
      <div className="row g-4">
        {vols.map((v) => (
          <div className="col-12 col-md-6 col-lg-4" key={v.ref}>
            <div className="trip-card shadow-sm rounded-4 overflow-hidden border-0">
              {/* Image de destination (background or overlay) */}
              <div className="card-prestige-header d-flex justify-content-between align-items-center p-3">
                <span className="compagnie-tag text-uppercase fw-extrabold tracking-wider">
                  {v.compagnie}
                </span>
                <span className="reg-number-vol fw-mono">{v.ref}</span>
              </div>

              <div className="card-prestige-body p-4 text-center">
                <div className="route-area d-flex justify-content-center align-items-center gap-4 mb-4">
                  <div className="location">
                    <span className="airport-code display-4 fw-black text-dark">
                      {v.depart}
                    </span>
                    <span className="city-name text-secondary fw-semibold d-block">
                      {v.nom_depart}
                    </span>
                    <span className="time fw-bold text-dark d-block mt-2">
                      {v.heure_dep}
                    </span>
                  </div>
                  <div className="plane-icon-area text-muted opacity-50 fs-1">
                    <i className="bi bi-airplane-engines-fill"></i>
                    <span className="duree-tag d-block mt-1 fs-7">
                      {v.duree}
                    </span>
                  </div>
                  <div className="location">
                    <span className="airport-code display-4 fw-black text-dark">
                      {v.arrivee}
                    </span>
                    <span className="city-name text-secondary fw-semibold d-block">
                      {v.nom_arrivee}
                    </span>
                    <span className="time fw-bold text-dark d-block mt-2">
                      {v.heure_arr}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-prestige-footer border-top pt-3 pb-3 px-4 mt-3 d-flex justify-content-between align-items-center">
                <div className="plane-info-prestige text-muted small">
                  <i className="bi bi-airplane me-1"></i> {v.avion}
                </div>
                <div className="actions-prestige-vol d-flex gap-2">
                  <button className="btn-booking py-2 px-4" title="Réserver">
                    <i className="bi bi-arrow-right"></i>
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
