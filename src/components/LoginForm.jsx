// import style from "../styles/Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Aquí podrías validar usuario/clave antes de redirigir ,envia los datos del usuario a HomePage
  const handleLogin = () => {  navigate('/HomePage', { state: { usuario } });   };

  return (
    <div className="login-container" id="loginForm">
      <h1 className="login-title">INICIAR<br/>SESIÓN</h1>
      <div className="login-logo"></div>
      <form className="login-form" 
      // onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="ingrese correo o dni"
          autoComplete="username"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="ingrese contraseña"
          autoComplete="current-password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
        {error && <p className="login-error">{error}</p>}
        <button 
          type="submit" 
          className="login-btn" 
          id="submit"
          onClick={handleLogin}
          // onSubmit={handleSubmit}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export { LoginForm };