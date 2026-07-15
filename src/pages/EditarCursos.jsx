import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function EditarCursos(){
    const { cursoId } = useParams();
    const [nombre, setNombreCurso] = useState("");
    const [descripcion, setDescripcionCurso] = useState("");
    const [activo, setActivo] = useState(true);
    const navegar = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8080/curso/${cursoId}`).then((res) => 
            {
                const curso = res.data;
                setNombreCurso(curso.nombre);
                setDescripcionCurso(curso.descripcion);
                setActivo(curso.activo);
            }
            ).catch((e => console.log(e.data)));
    }, [cursoId]);

    const actualizarCurso = (e) => {
        e.preventDefault();
        const curso = {
            nombre,
            descripcion,
            activo
        }

        axios.put(`http://localhost:8080/curso/${cursoId}`, curso).then(() => {console.log("Curso actualizado"); navegar(`/cursos/${cursoId}`)}).catch((e) => console.log(e.data));
        
    };

    return (
        <main className="contenido">
            <h1>Editar Curso: {cursoId}</h1>
             <form onSubmit={actualizarCurso}>
                <label>Nombre curso</label>
                <input type="text" value={nombre} onChange={(e) => setNombreCurso(e.target.value)} readOnly/>
                <label>Descripcion curso</label>
                <textarea value={descripcion} onChange={(e) => setDescripcionCurso(e.target.value)}/>
                <label>Curso Activo?</label>
                <input type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)}/>
                <button>Guardar</button>
             </form>
        </main>
    );
}

export default EditarCursos;