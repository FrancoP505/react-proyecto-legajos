import React from 'react';
import AppHeader from '../components/AppHeader';
import MainCard from '../components/MainCards';

const HomePage = () => {
    const handleCardClick = () => {
        window.location.href = '/upload';
    };

    return (
        <>
            <AppHeader />   
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', padding: '2rem' }}>
                <MainCard title="Card 1" description="Descripción de la tarjeta 1" onClick={handleCardClick} />
                <MainCard title="Card 2" description="Descripción de la tarjeta 2" onClick={handleCardClick} />
                <MainCard title="Card 3" description="Descripción de la tarjeta 3" onClick={handleCardClick} />
                <MainCard title="Card 4" description="Descripción de la tarjeta 4" onClick={handleCardClick} />
            </div>
        </>
    );
};

export default HomePage;