import { Contador } from "./components/Contador"
import ListaCompras from "./components/ListaCompras"
import { PerfilUsuario } from "./components/PerfilUsuario"
import { TarjetaPresentacion } from "./components/TarjetaPresentacion"


/* const userData = {
  name: "Pepe",
  country: "Col",
  age: 30
} */

export const App = () => {
  return (
    <>
      <h1>Componente App</h1>
      <ListaCompras />
      {/* <TarjetaPresentacion name={userData.name} country={userData.country} age={userData.age}/>
      <Contador />
      <PerfilUsuario /> */}
    </>
  )
}


