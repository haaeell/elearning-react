import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import Courses from '@/pages/Courses';
import Register from '@/pages/Register';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}
