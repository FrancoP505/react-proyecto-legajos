import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export function AppHeader() {
    return (
        <header className="d-flex justify-content-between align-items-center bg-dark text-white py-3 px-4">
            <UserRole text="Profesor" />
            <UserName text="Juan Pérez" />
            {/* <button className="salir-btn btn btn-danger" onClick={() => window.location.href = './Appjsx'}>Salir</button> */}
        </header>
    );
}

export default AppHeader;

function UserRole ({ text }) {
    return (
        <span className="rol-label">Rol: {text}</span>
    )
}

function UserName ({ text }) {
    return (
        <span className="user-name">Usuario: {text}</span>
    )
}
