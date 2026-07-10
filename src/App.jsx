import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar  from './components/Sidebar';

import axios from "axios";

function App() {
  return (
    <>
      <Navbar/>
      <div className="layout">
        <Sidebar/>
        <Home/>
      </div>
      <Footer/>
    </>
  );
}
export default App;


