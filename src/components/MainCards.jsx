function CardImage({ src }) {
    return (
        <img
            src={src}
            className="card-img-top mx-auto mt-3"
            alt="Subir archivos"
            style={{ width: '64px', height: '64px' }}
        />
    );
}

function CardTitle({ text }) {
    return (
        <div className="card-body">
            <h5 className="card-title">{text}</h5>
        </div>
    )
}

function CardDescription({ text }) {
    return (
        <p className="card-text">{text}</p>
    )
}

function Card({ onClick, image, title, description }) {
    return (
        <div
            className="card shadow text-center"
            style={{ width: '14rem', cursor: 'pointer' }}
            onClick={onClick}
        >
            <CardImage src={image} />
            <CardTitle text={title} />
            <CardDescription text={description} />
        </div>
    );
}

// Componente MainCards que utiliza el componente Card, mostrando una tarjeta centrada, responsive y con margen, que al hacer click redirige a otras páginas

function MainCards() {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/upload'); // ✅ navegación SPA
    };

    return (
        <div className="d-flex justify-content-around flex-wrap mt-4">
            <Card
                onClick={handleCardClick}
                image="https://ejemplo.com/imagen.jpg"
                title="Subir Archivos"
                description="Sube y gestiona tus archivos de manera sencilla y rápida."
            />
        </div>
    );
}


export default MainCards;