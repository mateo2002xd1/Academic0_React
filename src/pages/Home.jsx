import CursoCard from "../components/CursoCard";
import DashboardCard from "../components/DashboardCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";

function Home(){
    const [usuarios, setUsuarios] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [totalCursos, setTotalCursos] = useState([]);
    const [inscripciones, setInscripciones] = useState([]);

    useEffect(() => {

        api.get("/usuario")
            .then(res => setUsuarios(res.data));

        api.get("/curso")
            .then(res => setCursos(res.data.content));

        api.get("/curso")
            .then(res => setTotalCursos(res.data.totalElements));

        api.get("/inscripcion")
            .then(res => setInscripciones(res.data));

    }, []);

    return(
        <main className="contenido">
            <DashboardCard
                titulo="Usuarios"
                cantidad={usuarios.length}
            />

            <DashboardCard
                titulo="Cursos"
                cantidad={totalCursos}
            />

            <DashboardCard
                titulo="Inscripciones"
                cantidad={inscripciones.length}
            />
            
            <div className="flex gap-4 mt-8">

                <Link to="/usuarios">
                    Crear Usuario
                </Link>

                <Link to="/cursos/nuevo">
                    Crear Curso
                </Link>

                <Link to="/inscripciones">
                    Mis Inscripciones
                </Link>

            </div>
                
            {cursos.slice(0,3).map(curso => (

                <li key={curso.id}>

                    {curso.nombre}

                </li>

            ))}
        </main>
        
    );
}

export default Home;