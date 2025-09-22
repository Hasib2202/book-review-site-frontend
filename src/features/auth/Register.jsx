// book-review-site/src/features/auth/Register.jsx
import React, { useState } from 'react';
import api from '../../services/api';

export default function Register() {
  const [form, setForm] = useState({ Name:'', Username:'', Email:'', Password:'' });
  const [msg, setMsg] = useState('');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/user/register', form);
      setMsg('Registration successful! Please log in.');
    } catch (err) {
      setMsg(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl mb-4">Register</h2>
      {msg && <p className="mb-4 text-red-600">{msg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['Name','Username','Email','Password'].map(field => (
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
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
