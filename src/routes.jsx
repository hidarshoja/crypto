import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import AuthLayout from './Layouts/AuthLayout';
import MainLayout from './Layouts/MainLayout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* مسیرهای با AuthLayout */}
        <Route 
          path="/login" 
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          } 
        />
        <Route 
          path="/register" 
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          } 
        />
        
        {/* مسیرهای با MainLayout */}
        <Route 
          path="/" 
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
