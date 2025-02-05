import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export const LoginPage = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  // Función para redirigir a la página principal
  // Router necesarios por modulos 
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Fernando Torres');
    navigate(lastPath, { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin}
      >
        Login
      </button>

    </div>
  )
}
