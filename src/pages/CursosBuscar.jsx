import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CursoCard from "../components/CursoCard";
import api from "../service/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function CursosBuscar(){
    const { cursoId } = useParams();
    const [curso, setCurso] = useState(null);
    const { rol } = useContext(AuthContext);
    const [ inscripcion, setInscripcion ] = useState([]);
    
    const inscribirCurso = (cursoId) => {
    const datosInscripcion = { cursoId };

        api.post("/inscripcion", datosInscripcion)
            .then(() => {
                console.log("Inscripción realizada");
                cargarInscripciones();
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {api.get(`/curso/${cursoId}`).then((res) => setCurso(res.data)).catch((e) => console.log(e.data))}, [cursoId]);
    
    useEffect(() => {api.get(`/inscripcion`).then((res) => setInscripcion(res.data)).catch((e) => console.log(e.data))}, [cursoId]);

    useEffect(() => {cargarInscripciones();}, [cursoId]);

    const cargarInscripciones = () => {
            api.get("/inscripcion")
            .then((res) => setInscripcion(res.data))
            .catch((e) => console.log(e));
    };

    const mostrarInscripcion = inscripcion.some(i => i.cursoId === Number(cursoId));

    return (
        <main className="contenido">
            <h1>
                Buscar curso: {cursoId}
            </h1>

            {
            curso && (
                <CursoCard
                    key={curso.id}
                    id={curso.id}
                    name={curso.nombre}
                    desc={curso.descripcion}
                    activo={curso.activo}
                    fechacreacion={curso.fechacreacion}
                    mostrarEditarCurso={rol == "ROLE_ADMIN" && true}
                    mostrarBotonInscripcion={!mostrarInscripcion}
                    inscribirCurso={inscribirCurso}
                />
            )}
        </main>
    );
}

export default CursosBuscar;