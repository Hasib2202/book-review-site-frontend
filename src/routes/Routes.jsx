import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// layouts
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

// pages
import LandingPage from '../pages/LandingPage';
import HomePage    from '../pages/HomePage';

// auth
import Login       from '../features/auth/Login';
import Register    from '../features/auth/Register';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login"    element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          {/* protected routes */}
          <Route path="/home" element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }/>
          {/* add other protected routes here, e.g. /books, /reviews */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
