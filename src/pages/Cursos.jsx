import { useEffect, useState } from "react";
import CursoCard from "../components/CursoCard";
import { Link } from "react-router-dom";
import api from "../service/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Cursos(){
    const [curso, setCurso] = useState([]);
    const { rol } = useContext(AuthContext);
    useEffect(() => {api.get("/curso").then((res) => setCurso(res.data.content)).catch((e) => console.log(e.data))}, []);
    console.log(rol)
    return (
        <main className="contenido">
            {rol == "ROLE_ADMIN" && <Link to="/cursos/nuevo">Crear Curso</Link>}
            <h1>
                Cursos
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