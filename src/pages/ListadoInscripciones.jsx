import { useState, useEffect } from "react";
import api from "../service/api";
import CursoCard from "../components/CursoCard";

function ListadoInscripciones(){
    const [ inscripcion, setInscripcion ] = useState([]);
    
    useEffect(() => {api.get(`/inscripcion`).then((res) => setInscripcion(res.data)).catch((e) => console.log(e.data))}, []);
    console.log(inscripcion);
    return (
        <main className="contenido">
            <h1>Mis inscripciones</h1>

            {
                
                inscripcion.map((curso) => <CursoCard
                    key={curso.cursoId}
                    id={curso.cursoId}
                    name={curso.cursoNombre}
                    fechacreacion={curso.fechaInscripcion}
                    mostrarEditarCurso={false}
                    mostrarBotonInscripcion={false}
                    mostrarBotonDescripcion={true}
                />)
            }
        </main>
    );
}

export default ListadoInscripciones;