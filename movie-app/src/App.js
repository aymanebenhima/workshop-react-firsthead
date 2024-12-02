import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;