import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MotorsPage from './pages/motors-page.page'
import BoatsPage from './pages/boats-page.page'
import YachtsPage from './pages/yachts-page.page'

import Header from './components/header/header.component';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Header />
      <Route exact path='/' component={MotorsPage} />
      <Route path='/boats' component={BoatsPage} />
      <Route path='/yachts' component={YachtsPage} />
    </Container>
  );
}

export default App;
