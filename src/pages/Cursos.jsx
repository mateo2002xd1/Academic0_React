import { useEffect, useState } from "react";
import CursoCard from "../components/CursoCard";
import axios from "axios";
import { Link } from "react-router-dom";

function Cursos(){
    const [curso, setCurso] = useState([]);
    useEffect(() => {axios.get("http://localhost:8080/curso").then((res) => setCurso(res.data.content)).catch((e) => console.log(e.data))}, []);

    return (
        <main className="contenido">
            <Link to="/cursos/nuevo">Crear Curso</Link>
            <h1>
                Home
            </h1>
            <h2>Total de cursos: {curso.length}</h2>

            {
                curso.map((curso) => {
                    console.log(curso);
                    return <CursoCard name={curso.nombre} desc={curso.descripcion} activo={curso.activo} id={curso.id} key={curso.id} fechacreacion={curso.fechacreacion} mostrarBotonDescripcion={true}/>
                })
            }
        </main>
    );
}

export default Cursos;