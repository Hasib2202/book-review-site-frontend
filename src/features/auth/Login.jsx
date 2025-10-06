// book-review-site/src/features/auth/Login.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { BookOpen, Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [form, setForm] = useState({ Username: '', Password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data } = await api.post('/user/login', form);
      // API returns: { Message, Id, Name, Username, Email, Role, Token }
      const user = {
        id: data.Id,
        name: data.Name,
        username: data.Username,
        email: data.Email,
        role: data.Role
      };
      signIn(user, data.Token);
      window.location.href = '/';
    } catch (err) {
      setError(err.response?.data || 'Login failed. Please check your credentials.');
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
            Welcome back! Sign in to your account
          </p>
        </div>

        <Card className="border-border/50 shadow-xl bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Sign In</CardTitle>
            <CardDescription className="font-sans text-muted-foreground">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="font-sans text-sm font-medium">Username</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-blue-400 transition-colors duration-300" />
                  <Input
                    id="username"
                    name="Username"
                    type="text"
                    placeholder="Enter your username"
                    value={form.Username}
                    onChange={handleChange}
                    required
                    className="font-sans pl-10 h-11 focus-visible:ring-blue-400 focus-visible:border-blue-400 transition-all duration-300"
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border accent-blue-400" />
                  <span className="font-sans text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="font-sans text-emerald-400 hover:text-emerald-300 hover:underline transition-colors duration-300">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full font-sans font-medium h-11 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <Separator />

            <div className="text-center space-y-4">
              <p className="font-sans text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-emerald-400 hover:text-emerald-300 hover:underline font-medium transition-colors duration-300">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="font-mono text-center text-xs text-muted-foreground mt-8">
          By signing in, you agree to our{' '}
          <Link to="/terms" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-300">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
