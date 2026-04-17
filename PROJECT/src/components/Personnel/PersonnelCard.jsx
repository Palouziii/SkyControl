import "../../css/PersonnelCard.css";

export default function PersonnelCard({ personnels, remove, edit }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th className="ps-4 py-3">ID STAFF</th>
              <th>NOM / PRÉNOM</th>
              <th>FONCTION</th>
              <th>TÉLÉPHONE</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {personnels.map((personnel) => (
              <tr key={personnel.id_personnel}>
                <td className="ps-4 fw-bold text-primary small text-primary">
                  {personnel.id_personnel}
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-initials me-3">
                      {personnel.prenom[0]}
                      {personnel.nom[0]}
                    </div>
                    <div>
                      <div className="fw-bold">
                        {personnel.nom.toUpperCase()}
                      </div>
                      <div className="text-muted small">{personnel.prenom}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={`badge-role ${personnel.fonction.toLowerCase().replace("ô", "o")}`}
                  >
                    {personnel.fonction}
                  </span>
                </td>
                <td className="fw-mono small">{personnel.telephone}</td>
                <td className="text-center">
                  <button 
                  className="btn btn-outline-dark btn-sm fw-bold me-2 px-3"
                  onClick={() => edit(personnel)}
                  >
                    ÉDITER
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm fw-bold px-3"
                    onClick={() => remove(personnel)}
                  >
                    LICENCIEMENT
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
