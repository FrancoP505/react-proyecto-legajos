import style from "../styles/Login.css";

export function Login() {
  return (
    <div className="login-container">
        <h1 className="login-title">INICIAR<br/>SESIÓN</h1>
        <div className="login-logo"></div>
        <form className="login-form">
            <input type="text" id="email" name="email" placeholder="ingrese correo o dni" autoComplete="username" required/>
            <input type="password" id="password" name="password" placeholder="ingrese contraseña" autoComplete="current-password" required/>
            <button
              type="button"
              className="login-btn"
              onClick={() => { window.location.href = '/HomePage'; }}
            >
                Entrar
            </button>
        </form>
    </div>
  );
}

export default Login;