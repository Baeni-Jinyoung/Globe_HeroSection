import React from 'react'
import "./styles/globals.css";
import { NavBar, HeroSection, Footer } from './components/componentsindex.js';

function App() {
  return <div className='App'>
    <NavBar />
    <HeroSection/>
    <Footer />
  </div>;
}

export default App;
