import { useState } from "react"


export const PerfilUsuario = () => {

  const [usuario, setUsuario] = useState({nombre: "Jose", country: "col", edad: 33})

  const actualizarEdad = () => {
    setUsuario({ ...usuario, edad: usuario.edad + 1 })
    console.log(usuario)
  }

  return (
    <>

      <div>
        <p>Nombre: {usuario.nombre}</p>
        <p>Edad: {usuario.edad}</p>
        <button onClick={ () => { actualizarEdad() } }>Cumplir años</button>
      </div>

    </>
  )
}
