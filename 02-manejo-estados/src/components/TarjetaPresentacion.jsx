export const TarjetaPresentacion = ({ name, country, age }) => {
  return (
    <>
      <div style={{backgroundColor: "gray"}}>
        <p>Tarjeta de presentación</p>
        <p>Nombre: {name}</p>
        <p>Country: {country}</p>
        <p>Age: {age}</p>
      </div>
    </>
  )
}