

export const StatusMessage = ({ status, color }) => {

  switch (status) {
    case "loading":
      return <p style={{color: color}}>Cargando....</p>
    case "success":
      return <p style={{color: color}}>Datos cargados exitosamente</p>
    case "error":
      return <p style={{color: color}}>Hubo un error al cargar los datos</p>
    default:
      return <p style={{color: color}}>Estado desconocido</p>
  }

}
