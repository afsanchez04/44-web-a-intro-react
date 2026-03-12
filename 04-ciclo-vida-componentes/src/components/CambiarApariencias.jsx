import { useEffect } from 'react'
function CambiarApariencias({ onMount, onUnmount }) {
  useEffect(() => {
    onMount() //montaje
    return () => {
      onUnmount() //desmontaje
    }
  }, [onMount, onUnmount])
  return null
}
export default CambiarApariencias