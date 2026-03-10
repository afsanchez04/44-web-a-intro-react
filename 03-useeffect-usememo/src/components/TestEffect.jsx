import { useEffect, useState } from "react"
import { SeguimientoRaton } from "./SeguimientoRaton"


export const TestEffect = () => {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsuarios(data)
      )
      .catch(error => console.error("Error al obtener usuarios: ", error))


  }, [])


  return (
    <>
      <h1>🚀 Lista de usuarios ⛅</h1>
      <SeguimientoRaton />
      <ul>
        {
          usuarios.map(usuario => (
            <li key={usuario.id}> {usuario.name}, {usuario.website} </li>
          ))
        }
      </ul>
    </>
  )
}
