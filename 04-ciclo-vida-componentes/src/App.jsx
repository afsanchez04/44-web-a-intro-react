import { useState } from "react"


export const App = () => {

  const [nombre, setNombre] = useState("")

  const manejarCambio = (e) => {
    e.preventDefault()
    setNombre(e.target.value)
  }

  return (
    <>
      <h2>Escribe tu nombre</h2>
      <input
        type="text"
        value={nombre}
        onChange={ manejarCambio }
        placeholder="John Doe..."
      />
    </>
  )
}
