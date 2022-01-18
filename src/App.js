import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />

    <Switch>
      <Route path='/:movieId'>
        <Movie />
      </Route>

      <Route path='/'>
        <Home />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>

    <GlobalStyle />
  </Router>
);

export default App;
