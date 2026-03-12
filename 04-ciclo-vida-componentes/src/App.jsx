import { useCallback, useEffect, useState } from 'react'
import CambiarApariencias from './components/CambiarApariencias'


export function App() {
  const [mostrarComponente, setMostrarComponente] = useState(true)

  const [estiloTitulo, setEstiloTitulo] = useState({
    fontSize: '32px',
    backgroundColor: 'transparent',
    color: 'black',
  })
  const alMontar = useCallback(() => {
    setEstiloTitulo({
      fontSize: '56px',
      backgroundColor: 'lightgreen',
      color: 'black',
    })
  }, [])
  const alDesmontar = useCallback(() => {
    setEstiloTitulo({
      fontSize: '32px',
      backgroundColor: 'transparent',
      color: 'orange',
    })
  }, [])
  useEffect(() => {

    const temporizador = setTimeout(() => {
      setMostrarComponente(false)
    }, 4000)

    return () => clearTimeout(temporizador)
    
  }, [])
  return (
    <>
      <h1 style={estiloTitulo}>React</h1>
      <p>El componente se desmonta automaticamente en 4 segundos.</p>
      {mostrarComponente && <CambiarApariencias onMount={alMontar} onUnmount={alDesmontar} />}
    </>
  )
}
