import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

function CrearCursos(){
    const [nombre, setNombreCurso] = useState("");
    const [descripcion, setDescripcionCurso] = useState("");
    const [activo, setActivo] = useState(true);
    const navegar = useNavigate();
    const guardarCurso = (e) => {
        e.preventDefault();

        const curso = {
            nombre,
            descripcion,
            activo
        }

        api.post("/curso", curso).then(() => 
                                                                    {
                                                                        console.log("Curso creado"); 
                                                                        setNombreCurso("");
                                                                        setDescripcionCurso("");
                                                                        setActivo(true);
                                                                        navegar("/cursos");
                                                                    }
                                                             ).catch((e) => {console.log(e.data)});
    }

    return (
        <main className="contenido">
            <h1>Crear Curso</h1>
             <form onSubmit={guardarCurso}>
                <label>Nombre curso</label>
                <input type="text" value={nombre} onChange={(e) => setNombreCurso(e.target.value)}/>
                <label>Descripcion curso</label>
                <textarea value={descripcion} onChange={(e) => setDescripcionCurso(e.target.value)}/>
                <label>Curso Activo?</label>
                <input type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)}/>
                <button>Guardar</button>
             </form>
        </main>
    );
}

export default CrearCursos;