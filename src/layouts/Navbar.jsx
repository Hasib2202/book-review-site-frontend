import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">BookReview</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span className="font-medium">Hello, {user.username}</span>
            <button onClick={signOut} className="text-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-600">Login</Link>
            <Link to="/register" className="text-blue-600">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
