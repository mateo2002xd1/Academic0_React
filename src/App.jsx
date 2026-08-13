import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios"; 
import CursosBuscar from "./pages/CursosBuscar"; 
import CrearCursos from "./pages/CrearCursos"; 
import EditarCursos from './pages/EditarCursos';
import FormularioUsuario from './components/FormularioUsuario';
import ListadoInscripciones from './pages/ListadoInscripciones';
import ProtectedLayout from './components/ProtectedLayout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          element={
            <ProtectedLayout />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:cursoId" element={<CursosBuscar />} />
          <Route path="/cursos/nuevo" element={<CrearCursos />} />
          <Route path="/cursos/editar/:cursoId" element={<EditarCursos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/inscripciones" element={<ListadoInscripciones />} />
        </Route>

      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;