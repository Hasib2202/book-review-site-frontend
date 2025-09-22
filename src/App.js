// src/App.jsx
import React from 'react'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/Routes'

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
