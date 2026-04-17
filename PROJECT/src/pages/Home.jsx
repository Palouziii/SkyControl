import "../css/Home.css";
import Aeroport from "../assets/TERMINALE.jpg";

export default function Home() {
  return (
    <div className="container-fluid p-0 pb-5">
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h1 className="fw-bold m-0 display-5 text-uppercase">
              L'Élite de l'Aérien
            </h1>
            <p className="text-secondary mb-0">
              Bienvenue dans un monde où chaque seconde est une promesse de
              perfection.
            </p>
          </div>
          <span
            className="badge bg-primary px-3 py-2 text-uppercase shadow-sm"
            style={{ letterSpacing: "1px" }}
          >
            Premium Experience
          </span>
        </div>

        <div className="position-relative overflow-hidden rounded-4 shadow-sm hero-container">
          <img
            src={Aeroport}
            alt="Terminal d'Exception"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-5 hero-overlay text-white">
            <h2 className="m-0 fw-bold display-6">
              UN VOL RIEN QUE POUR VOUS...
            </h2>
            <p className="m-0 opacity-75 fs-5 italic">
              L'élégance architecturale au service de vos ambitions.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-4 mt-5 text-center">
        <h2 className="h3 fw-bold text-uppercase mb-2">
          Pourquoi choisir SkyControl ?
        </h2>
        <div
          className="mx-auto bg-primary mb-4"
          style={{ height: "3px", width: "60px" }}
        ></div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 feature-card rounded-4 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3 text-primary">
                <i className="bi bi-gem fs-4 me-2"></i>
                <h5 className="card-title m-0 fw-bold">UN CADRE PRESTIGIEUX</h5>
              </div>
              <p className="small text-muted mb-4">
                Offrez à vos passagers une immersion dans un design moderne et
                des salons VIP exclusifs.
              </p>
              <ul className="list-unstyled small text-muted lh-lg">
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>Salons
                  Grand Confort
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>
                  Boutiques de luxe & Gastronomie
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>
                  Architecture de classe mondiale
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 feature-card rounded-4 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3 text-primary">
                <i className="bi bi-clock-history fs-4 me-2"></i>
                <h5 className="card-title m-0 fw-bold">FLUIDITÉ ABSOLUE</h5>
              </div>
              <p className="small text-muted mb-4">
                Le temps est un luxe. Nous garantissons des parcours sans
                attente et une logistique sans faille.
              </p>
              <ul className="list-unstyled small text-muted lh-lg">
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>
                  Contrôles Prioritaires (Fast Track)
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>
                  Embarquement ultra-rapide
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>Gestion
                  bagages Haute Performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 feature-card rounded-4 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3 text-primary">
                <i className="bi bi-rocket-takeoff fs-4 me-2"></i>
                <h5 className="card-title m-0 fw-bold">
                  TECHNOLOGIE FUTURISTE
                </h5>
              </div>
              <p className="small text-muted mb-4">
                Une infrastructure connectée pour une expérience de voyage 100%
                digitale et sécurisée.
              </p>
              <ul className="list-unstyled small text-muted lh-lg">
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>
                  Biométrie & Sans-contact
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>Wi-Fi 6
                  Haute Vitesse
                </li>
                <li>
                  <i className="bi bi-check2-all text-primary me-2"></i>Suivi de
                  vol en temps réel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
