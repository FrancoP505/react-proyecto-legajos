import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/home" element={<HomePage />} />
    </Route>
    <Route path="*" element={<LoginPage />} />
  </Routes>
);

export default AppRoutes;
