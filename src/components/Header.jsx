import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }



  return (
    <header style={{ backgroundColor: "lightblue" }}>
      <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="imagen de logo" />



      <nav className="mi-navbar">
        <ul class="nav justify-content-end">
          {/* Cambiar elementos a por componentes Link de react-router-dom */}
          <li class="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/about">Sobre Nosotros</Link></li>
          {
            user && <>

              <li class="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>

            </>
          }
          {
            !user && <>
              <li class="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>

            </>
          }

          {
            user && <>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          }
          {
            !user && <>
              <Link to="/registrate" className="btn btn-primary">
                Regístrate
              </Link>
            </>
          }

        </ul>
      </nav>
    </header>
  )
}

export { Header }