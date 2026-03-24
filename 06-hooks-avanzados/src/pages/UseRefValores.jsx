import { useRef, useState } from "react"

export const UseRefValores = () => {

  const refValue = useRef(0)
  const [stateValue, setStateValue] = useState(0)
  console.log("Componente renderizado 🚀")

  return (
    <>
      {/* <p>Valor con useRef: {refValue.current}</p> */}
      <p>Valor con useState: {stateValue} </p>

      <button onClick={() => {
        refValue.current += 1
        console.log("refValue incrementado:",refValue.current)
      }}>
        Incrementar useRef, No Renderiza
      </button>
      <button onClick={() => setStateValue(stateValue+1) }>Incrementar useState, Sí Renderiza</button>
    </>
  )
}
