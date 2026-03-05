import { useState } from "react"

export const Contador = () => {

  const [contador, setContador] = useState(0)
  const [color, setColor] = useState("yellow")
/*   let num = 0
  
  function sumar () {
    num = num + 1
    console.log(num)
  } */

  return (
    <>
      <h3 style={{color: color}}>El contador está en: {contador}</h3>
      {/* <h3>El num está en: {num}</h3> */}

      <button onClick={ () => {
        setContador( contador + 1 )
        setColor("blueviolet")
      } }>Incrementar Contador</button>
      {/* <button onClick={ () => sumar () }>Incrementar Num</button> */}
    </>
  )
}
