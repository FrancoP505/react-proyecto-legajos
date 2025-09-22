import React from "react";
import "../styles/login.css";

const LoginContainer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    window.location.href = "main.html";
  };

  return (
    <div className="login-container">
      <h1 className="login-title">
        INICIAR<br />SESIÓN
      </h1>
      <div
        className="login-logo"
        style={{
          width: 214,
          height: 214,
          background: "url('assets/icons/ISFD_logo.png') no-repeat center center",
          backgroundSize: "contain",
          borderRadius: 8,
          marginBottom: 24,
        }}
      />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="ingrese correo o dni"
          autoComplete="username"
          required
          className="login-input"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="ingrese contraseña"
          autoComplete="current-password"
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginContainer;