import { Link } from "react-router-dom";

export default function MenuNav({ setUsuarioLogueado, onLogout }) {
  const cerrarSesion = () => {
    setUsuarioLogueado(null);
    onLogout();
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      <Link className="navbar-brand" to="/">
        Mi app
      </Link>

      <div className="navbar-nav d-flex flex-row gap-3">

        <Link className="nav-link text-white" to="/">
          Inicio
        </Link>

        <Link className="nav-link text-white" to="/incidencias">
          Incidencias
        </Link>

        <Link className="nav-link text-white" to="/registrar">
          Registrar
        </Link>

      </div>

      <button className="btn btn-danger btn-sm" onClick={cerrarSesion}>
        Logout
      </button>

    </nav>
  );
}