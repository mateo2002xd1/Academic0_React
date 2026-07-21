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
import ProtectedRoute from './components/ProtectedRoute';
import FormularioUsuario from './components/FormularioUsuario';

function App() {
  return (
    <>
      <Navbar/>
      <div className="layout">
        <BrowserRouter>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cursos' element={<ProtectedRoute><Cursos /></ProtectedRoute>}></Route>
              <Route path='/cursos/:cursoId' element={<ProtectedRoute><CursosBuscar /></ProtectedRoute>}></Route>
              <Route path='cursos/nuevo' element={<ProtectedRoute><CrearCursos /></ProtectedRoute>}></Route>
              <Route path='cursos/editar/:cursoId' element={<ProtectedRoute><EditarCursos /></ProtectedRoute>}></Route>
              
              <Route path='/login' element={<Login />}></Route>
              <Route path='/usuarios' element={<ProtectedRoute><Usuarios /></ProtectedRoute>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;