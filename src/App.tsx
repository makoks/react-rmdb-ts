import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import UserProvider from './context';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <Router>
    <UserProvider>
      <Header />

      <Routes>
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
