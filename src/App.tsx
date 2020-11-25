import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Section from './components/section';
import Clients from './components/clients';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services';

function App() {
  return (
    <div>
      <Section />
      <Clients />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
