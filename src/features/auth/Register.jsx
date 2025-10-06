// book-review-site/src/features/auth/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { BookOpen, Eye, EyeOff, Mail, Lock, User, UserPlus } from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({ Name: '', Username: '', Email: '', Password: '' });
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState(''); // 'success' or 'error'
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setMsg('');

    try {
      await api.post('/user/register', form);
      setMsg('Registration successful! Please log in.');
      setMsgType('success');
      // Clear form on success
      setForm({ Name: '', Username: '', Email: '', Password: '' });
    } catch (err) {
      setMsg(err.response?.data || 'Registration failed. Please try again.');
      setMsgType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center space-x-2 mb-4 group">
            <BookOpen className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-emerald-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500">
              BookHaven
            </span>
          </Link>
          <p className="font-sans text-muted-foreground text-center text-sm sm:text-base">
            Join our community of book lovers
          </p>
        </div>

        <Card className="border-border/50 shadow-xl bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-serif text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Create Account</CardTitle>
            <CardDescription className="font-sans text-muted-foreground">
              Sign up to start your reading journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {msg && (
              <div className={`p-3 text-sm border rounded-md ${msgType === 'success'
                ? 'text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800'
                : 'text-destructive bg-destructive/10 border-destructive/20'
                }`}>
                {msg}
                {msgType === 'success' && (
                  <div className="mt-2">
                    <Link to="/login" className="font-medium underline">
                      Go to login
                    </Link>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-sans text-sm font-medium">Full Name</Label>
                <div className="relative group">
                  <UserPlus className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-emerald-400 transition-colors duration-300" />
                  <Input
                    id="name"
                    name="Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.Name}
                    onChange={handleChange}
                    required
                    className="font-sans pl-10 h-11 focus-visible:ring-emerald-400 focus-visible:border-emerald-400 transition-all duration-300"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="font-sans text-sm font-medium">Username</Label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-blue-400 transition-colors duration-300" />
                  <Input
                    id="username"
                    name="Username"
                    type="text"
                    placeholder="Choose a username"
                    value={form.Username}
                    onChange={handleChange}
                    required
                    className="font-sans pl-10 h-11 focus-visible:ring-blue-400 focus-visible:border-blue-400 transition-all duration-300"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-amber-400 transition-colors duration-300" />
                  <Input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.Email}
                    onChange={handleChange}
                    required
                    className="font-sans pl-10 h-11 focus-visible:ring-amber-400 focus-visible:border-amber-400 transition-all duration-300"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-sans text-sm font-medium">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-purple-400 transition-colors duration-300" />
                  <Input
                    id="password"
                    name="Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={form.Password}
                    onChange={handleChange}
                    required
                    className="font-sans pl-10 pr-10 h-11 focus-visible:ring-purple-400 focus-visible:border-purple-400 transition-all duration-300"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-purple-400 transition-colors duration-300"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" required className="rounded border-border mt-1 accent-emerald-400" />
                <label className="font-sans text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full font-sans font-medium h-11 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>

            <Separator />

            <div className="text-center space-y-4">
              <p className="font-sans text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-emerald-400 hover:text-emerald-300 hover:underline font-medium transition-colors duration-300">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="font-mono text-center text-xs text-muted-foreground mt-8">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
