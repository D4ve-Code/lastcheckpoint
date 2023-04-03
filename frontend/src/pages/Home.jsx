export default function Home() {
  return (
    <div className="home">
      <h1>Concours de qui a fait le plus de pays</h1>
      <div className="content">
        <div className="form">
          <div className="nom">
            ici on va demander le nom dans un form "put"
          </div>
          <div className="nom">
            ici on va demander le prénom dans un form "put"
          </div>
          <div className="nom">ici on va récupérer les pays dans le get</div>
        </div>
        <div className="store_table">
          <div className="store_table_title">
            <h2>Ventes en cours</h2>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>nom</th>
                <th>prénom</th>
                <th>pays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>oviedo</td>
                <td>david</td>
                <td>france</td>
                <td>
                  <button className="btn_modify">modifier</button>
                </td>
                <td>
                  <button className="btn_delete">supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
