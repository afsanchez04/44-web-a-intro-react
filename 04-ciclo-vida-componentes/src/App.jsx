import { useContext } from "react"
import { Personajes } from "./components/Personajes"
import { UserContext } from "./context/UserContext"


export const App = () => {

  const { user } = useContext(UserContext)

  return (
    <div>

      <h1>User: {user.nombre}</h1>

      <Personajes/>

    </div>
  )
}
