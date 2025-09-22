import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar will be rendered by App */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Welcome to BookReview</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover and share your favorite book reviews.
        </p>
        <div className="space-x-4">
          <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded">Login</Link>
          <Link to="/register" className="px-6 py-2 bg-green-600 text-white rounded">Register</Link>
        </div>
      </main>
      {/* Footer rendered by App */}
    </div>
  );
}
