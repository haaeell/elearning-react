import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Login from '@/pages/Login';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import CourseList from '@/pages/Courses/Index';
import CourseDetail from '@/pages/Courses/[slug]';
import Register from '@/pages/Register';
import PageWrapper from '@/components/PageWrapper';

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper direction="right"><CourseList /></PageWrapper>} />
          <Route path="/courses/:slug" element={<PageWrapper direction="right"><CourseDetail /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
