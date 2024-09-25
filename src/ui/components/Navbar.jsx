import { Link, NavLink, useNavigate } from 'react-router-dom';
import { DropdownComponent } from './Customdropdown.jsx'; // Importando el componente Dropdown
import GameIcon from '../../assets/images/GameIcon.png';
import { activeClass } from '../customfunctions/activeClass.js'; // Importando la función de validación de clase activa

export const Navbar = () => {

  const navigate = useNavigate();
  
  const onLogout = () => {
    navigate('/login', { replace: true });
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src={GameIcon} // importar imagen como componente
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-3"
          />
          PoroAPIGames
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                //className verifica si la ruta está activa y agrega la clase 'active'
                className={({ isActive }) => activeClass().validateClassName(isActive)}
                to="/"
              >
                Goty Games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => activeClass().validateClassName(isActive)}
                to="/valve"
              >
                Valve
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => activeClass().validateClassName(isActive)}
                to="/rockstar"
              >
                Rockstar games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => activeClass().validateClassName(isActive)}
                to="/cdproject"
              >
                CD Projekt Red
              </NavLink>
            </li>

            <DropdownComponent /> {/* Usando el componente Dropdown aquí */}

            <li className="nav-item">
              <button
                className="btn btn-primary ms-3" 
                onClick={ onLogout }
                >
                Log out
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
