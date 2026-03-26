import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { NavBar } from "./components/NavBar"
import { NotFound } from "./pages/NotFound"
import { UserProfile } from "./pages/UserProfile"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AuthProvider, useAuth } from "./context/AuthContext"


export const App = () => {

  //const isAuthenticated = false
  const { isAuthenticated } = useAuth()
  return (
    <>


        <small>Manejo de rutas</small>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/:id" element={<UserProfile />} />

          <Route path="/dashboard" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <h1>Dashboard privado</h1>
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>

    


    </>
  )
}
