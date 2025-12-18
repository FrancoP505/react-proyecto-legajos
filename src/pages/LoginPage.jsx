import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";

// const LoginPage = () => (
//   <div>
//     <LoginForm />    
//   </div>
// );

// LoginPage ahora recibe setIsAuthenticated como prop
const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  //maneja el estado del formulario
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    // Validación exitosa (ejemplo simple)
    localStorage.setItem('auth', 'true'); // ✅ guarda el estado en localStorage
    setIsAuthenticated(true); // ✅ actualiza el estado global
    navigate('/homePage');        // ✅ redirige a la ruta protegida
  };

  // Maneja el envío del formulario
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      {<LoginForm />}
      {/* <button type="submit">Entrar</button> */}
      {/* El botón de enviar ahora está en LoginForm */}
    </form>
  );
};

// const LoginPage = ({ setIsAuthenticated }) => {
//   const handleLogin = () => {
//     // Validación exitosa
//     setIsAuthenticated(true);
//     navigate('/home');
//   };
// };

export default LoginPage;