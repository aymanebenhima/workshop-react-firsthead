import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Products from './pages/Products';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { Button } from 'antd'

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: "24px", textAlign: "center" }}>
        <Button type='primary' onClick={setIsAuthenticated}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<PrivateRoute isAuthenticated={isAuthenticated}><Admin /></PrivateRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default App;
