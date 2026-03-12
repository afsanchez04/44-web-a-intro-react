import { useEffect, useState } from "react"

export const Personajes = () => {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const data = await respuesta.json()
        setPersonajes(data.results)
      } catch (error) {
        console.error("Error", error)
      }
    }
    obtenerPersonajes()
  }, [])

  return (
    <>
      <h2>🫎 Mis personajes favoritos:</h2>
    </>
  )
}
