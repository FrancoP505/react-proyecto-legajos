import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export function AppHeader() {
    return (
        <header className="d-flex justify-content-between align-items-center bg-dark text-white py-3 px-4">
            {/* <span className="rol-label">Rol: usuario</span> */}
            <UserRole text="Profesor" />
            {/* <button className="salir-btn btn btn-danger">Salir</button> */}
            <UserName text="Juan Pérez" />
            <button className="salir-btn btn btn-danger" onClick={() => window.location.href = './Appjsx'}>Salir</button>
            {/* <script>
                    document.querySelector('.salir-btn').addEventListener('click', function() {
                            window.location.href = './Appjsx'
                    });
            </script> */}
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
