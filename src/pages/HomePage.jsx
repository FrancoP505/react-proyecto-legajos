import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import MainCards from '../components/MainCards';
import { useLocation} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ ahora está dentro del componente
  const { usuario } = location.state || {};

  const handleCardClick = () => {
    navigate('/upload');
  };

  return (
    <>
      <AppHeader />
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', padding: '2rem' }}>
        <MainCards title="Card 1" description="Descripción de la tarjeta 1" onClick={handleCardClick} />
        <MainCards title="Card 2" description="Descripción de la tarjeta 2" onClick={handleCardClick} />
        <MainCards title="Card 3" description="Descripción de la tarjeta 3" onClick={handleCardClick} />
        <MainCards title="Card 4" description="Descripción de la tarjeta 4" onClick={handleCardClick} />
      </div>
    </>
  );
};

export default HomePage;