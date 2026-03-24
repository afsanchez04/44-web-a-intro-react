import { useEffect, useRef } from "react"

export const UseRefFocus = () => {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <form>
        <input type="text"  placeholder="Escribe aquí" />
        <br />
        <input type="email"  placeholder="Email" />
        <br />
        <input type="password" ref={inputRef} placeholder="password" />
      </form>
    </>
  )
}
