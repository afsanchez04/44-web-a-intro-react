import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { UserCard } from "./components/UserCard"



export const App = () => {
  return (
    <>
      <Header />
      <UserCard name="Agnes" state="Alive" location="Panamá"/>
      <UserCard name="Alice" state="Dead" location="Perú"/>
      <UserCard name="Pedro" state="Alive" location="Colombia"/>
      <UserCard/>
      <Footer />
    </>
  )
}
