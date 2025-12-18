import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {

  // estado para manejar la autenticación del usuario, por defecto es false
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Navigate = useNavigate(); // ✅ dentro del componente

  // Mantener la sesión al recargar la página
  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true';
    setIsAuthenticated(auth);
  }, []);
  // revisa si hay un token en el localStorage para mantener la sesión  
  // const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));

  return (
    <BrowserRouter>
      <Routes>

        {/* Ruta pública, accesible para todos */}
        <Route 
          path="/" 
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Ruta protegida, solo accesible si isAuthenticated es true */}
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" replace />}
        />

        {/* Redirige cualquier ruta no definida a la página de inicio */}
        <Route 
          path="*" 
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}


// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import AppRoutes from './routes/AppRoutes';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <AppRoutes />
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

export default App;
