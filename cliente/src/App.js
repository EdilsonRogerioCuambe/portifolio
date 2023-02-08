import React from 'react';
import "./App.scss";

import {
  Sobre,
  Testemunhos,
  Header,
  Footer,
  Trabalho,
  Habilidades,
} from './container';

import {
  Navbar,
} from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Sobre />
      <Trabalho />
      <Habilidades />
      <Testemunhos />
      <Footer />
    </div>

  )
}

export default App;