import { useEffect, useState } from "react";
import CursoCard from "../components/CursoCard";
import axios from "axios";

function Home(){
    const [curso, setCurso] = useState([]);
    useEffect(() => {axios.get("http://localhost:8080/curso").then((res) => setCurso(res.data.content)).catch((e) => console.log(e.data))}, []);

    return (
        <main className="contenido">
            <h1>
                Sistema de cursos
            </h1>
            <h2>Total de cursos: {curso.length}</h2>

            {
                curso.map((curso) => {
                    console.log(curso);
                    return <CursoCard name={curso.nombre} desc={curso.descripcion} activo={curso.activo} id={curso.id} key={curso.id} fechacreacion={curso.fechacreacion}/>
                })
            }
        </main>
    );
}

export default Home;