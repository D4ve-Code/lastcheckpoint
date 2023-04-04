import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4242/countries`)
        setCountriesData(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error)
      }
    }
    fetchData()
  }, [])
  console.info(countriesData)
  return (
    <div className="home">
      <h1>Concours de qui a fait le plus de pays</h1>
      <div className="content">
        <div className="form">
          <form className="infoForm" encType="multipart/form-data">
            <label htmlFor="user_name">
              <input type="text" name="user_name" placeholder="Votre nom" />
            </label>
            <div className="prenom">
              ici on va demander le prénom dans un form "put"
            </div>
            <label htmlFor="country_name">
              <select name="country_name" id="country_name" required>
                <option value="">Sélectionner le pays</option>
                {countriesData.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.country}
                  </option>
                ))}
              </select>
            </label>
          </form>
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
