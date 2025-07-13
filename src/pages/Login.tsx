import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { Github, CircleUser } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;

    // Reset error
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email wajib diisi');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Format email tidak valid');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password wajib diisi');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password minimal 6 karakter');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    toast.success('Login berhasil!');

    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 10000);
  };

  const handleOAuthLogin = (provider: 'google' | 'github') => {
    toast.error('Login with OAuth is not supported yet!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => handleOAuthLogin('google')}
            className="p-3 rounded-full border hover:bg-gray-100 transition cursor-pointer"
          >
            <CircleUser className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => handleOAuthLogin('github')}
            className="p-3 rounded-full border hover:bg-gray-100 transition cursor-pointer"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'border border-red-500' : ''}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 text-small">{emailError}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'border-red-500' : ''}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          Belum punya akun?{' '}
          <Link to="/register" className="text-cyan-600 hover:underline">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
