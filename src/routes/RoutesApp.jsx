import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyJob from '../pages/Myjob.jsx';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import Button from '../components/Button.jsx';
import { useTheme } from '../themes/ThemeContext';

const RoutesApp = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Router>
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
        <Button onClick={toggleTheme}>
          Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </Button>
      </div>
    </Router>
  );
};

export default RoutesApp;

