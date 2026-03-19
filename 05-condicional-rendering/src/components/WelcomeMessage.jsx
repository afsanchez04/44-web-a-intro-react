

export const WelcomeMessage = ({ isLoggedIn }) => {

  console.log(isLoggedIn)

  if (isLoggedIn) {
    return <h1 style={{ color: "green" }}>Bienvenido usuario</h1>

  } else {
    return <h1 style={{ color: "red" }}>No has iniciado sesión</h1>

  }

}
