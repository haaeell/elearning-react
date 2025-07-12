import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full">Login</Button>
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
