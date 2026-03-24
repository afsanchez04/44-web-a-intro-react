import { Card } from "../components/Card"
import { Modal } from "../components/Modal"


export const Home = () => {
  return (
    <>
      <Card>
        <h2>Comida especializada</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, iste.</p>
      </Card>
      <Modal title="Título de la modal" content="Este contenido es muy importante"/>
      <Modal title="Intro a React" content="Esta es la clase de conditional rendering"/>

    </>
  )
}
