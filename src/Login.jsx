import React from "react";
import "./styles/Login.css"; // crea este archivo y copia los estilos del <style> de tu HTML

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    window.location.href = "main.html";
  };

  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">
          INICIAR<br />SESIÓN
        </h1>
        <div className="login-logo"></div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="ingrese correo o dni"
            autoComplete="username"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="ingrese contraseña"
            autoComplete="current-password"
            required
          />
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
      </div>
      <div className="system-info">
        <div>
          <img
            src="assets/icons/logo_sdl2.png"
            alt="SDL2 logo with stylized text, representing the digital records system. The logo is large and visually prominent, placed in a modern login page environment."
          />
          <label>
            Sistema de digitalización de legajos
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;