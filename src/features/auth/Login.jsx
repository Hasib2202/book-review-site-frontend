// book-review-site/src/features/auth/Login.jsx
import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ Username:'', Password:'' });
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await api.post('/user/login', form);
      signIn(data.user, data.token);
      window.location.href = '/';
    } catch (err) {
      setError(err.response?.data || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl mb-4">Login</h2>
      {error && <p className="mb-4 text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['Username','Password'].map(field => (
          <div key={field}>
            <label className="block">{field}</label>
            <input
              name={field}
              type={field==='Password'?'password':'text'}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
        <button className="w-full bg-green-600 text-white p-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
