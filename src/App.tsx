import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        {isAuthenticated ?
          <Route path="/dashboard" element={<Dashboard />} />
          :
          <Route path="/" element={<HomePage />} />
        }
      </Routes>
    </Router>
  );
};

export default App;
