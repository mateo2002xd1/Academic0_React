import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CursoCard from "../components/CursoCard";
import axios from "axios";

function CursosBuscar(){
    const { cursoId } = useParams();
    
    const [curso, setCurso] = useState(null);
    useEffect(() => {axios.get(`http://localhost:8080/curso/${cursoId}`).then((res) => setCurso(res.data)).catch((e) => console.log(e.data))}, [cursoId]);
    
    return (
        <main className="contenido">
            <h1>
                Buscar curso: {cursoId}
            </h1>

            {curso && (
                <CursoCard
                    key={curso.id}
                    id={curso.id}
                    name={curso.nombre}
                    desc={curso.descripcion}
                    activo={curso.activo}
                    fechacreacion={curso.fechacreacion}
                    mostrarEditarCurso={true}
                />
            )}
        </main>
    );
}

export default CursosBuscar;