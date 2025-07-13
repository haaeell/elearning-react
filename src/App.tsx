import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
