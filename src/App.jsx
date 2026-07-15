import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar  from './components/Sidebar';

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios"; 
import CursosBuscar from "./pages/CursosBuscar"; 
import CrearCursos from "./pages/CrearCursos"; 
import EditarCursos from './pages/EditarCursos';

function App() {
  return (
    <>
      <Navbar/>
      <div className="layout">
        <BrowserRouter>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cursos' element={<Cursos />}></Route>
              <Route path='/cursos/:cursoId' element={<CursosBuscar />}></Route>
              <Route path='cursos/nuevo' element={<CrearCursos />}></Route>
              <Route path='cursos/editar/:cursoId' element={<EditarCursos />}></Route>
              
              <Route path='/login' element={<Login />}></Route>
              <Route path='/usuarios' element={<Usuarios />}></Route>
            </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;