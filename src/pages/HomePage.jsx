// src/pages/HomePage.jsx
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Book Review Site</h1>
      <p className="text-lg text-gray-600">
        Please <a href="/login" className="text-blue-600 underline">Login</a> or <a href="/register" className="text-blue-600 underline">Register</a> to get started.
      </p>
    </div>
  );
}
