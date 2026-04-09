import "../../css/PassagerCard.css";

export default function PassagerCard({ passagers, remove }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 w-100">
          <thead className="table-light">
            <tr>
              <th className="ps-4 py-3">ID PASSAGER</th>
              <th>NOM & PRÉNOM</th>
              <th>NATIONALITÉ</th>
              <th>CONTACT</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {passagers.map((passager) => (
              <tr key={passager.id_passager}>
                <td className="ps-4 fw-bold text-primary">
                  {passager.id_passager}
                </td>
                <td>
                  <div className="fw-bold">{passager.nom.toUpperCase()}</div>
                  <div className="text-muted small">{passager.prenom}</div>
                </td>
                <td>{passager.nationalite}</td>
                <td>
                  <div className="small">
                    <i className="bi bi-envelope me-2"></i>
                    {passager.mail}
                  </div>
                  <div className="small text-muted">
                    <i className="bi bi-telephone me-2"></i>
                    {passager.telephone}
                  </div>
                </td>
                <td className="text-center">
                  <button className="btn btn-outline-dark btn-sm fw-bold me-2 px-3">
                    ÉDITER
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm fw-bold px-3"
                    onClick={() => remove(passager)}
                  >
                    SUPPRIMER
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
