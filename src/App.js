// src/App.jsx
import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'

// layouts
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

// pages
import HomePage from './pages/HomePage'

// auth
import Login from './features/auth/Login'
import Register from './features/auth/Register'

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

// Layout wrapper for pages that need navbar and footer
function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes with main layout */}
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />

        {/* Auth routes without main layout (they have their own styling) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with main layout */}
        <Route path="/books" element={
          <PrivateRoute>
            <MainLayout>
              <div className="container max-w-screen-xl px-4 py-8 mx-auto">
                <h1 className="mb-8 text-3xl font-bold">Browse Books</h1>
                <p className="text-muted-foreground">Books page coming soon...</p>
              </div>
            </MainLayout>
          </PrivateRoute>
        } />

        <Route path="/reviews" element={
          <PrivateRoute>
            <MainLayout>
              <div className="container max-w-screen-xl px-4 py-8 mx-auto">
                <h1 className="mb-8 text-3xl font-bold">Reviews</h1>
                <p className="text-muted-foreground">Reviews page coming soon...</p>
              </div>
            </MainLayout>
          </PrivateRoute>
        } />

        <Route path="/about" element={
          <MainLayout>
            <div className="container max-w-screen-xl px-4 py-8 mx-auto">
              <h1 className="mb-8 text-3xl font-bold">About BookHaven</h1>
              <p className="text-muted-foreground">About page coming soon...</p>
            </div>
          </MainLayout>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="dark">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </div>
  )
}
