import { useDebugValue, useEffect, useState } from "react";
import CursoCard from "../components/CursoCard";
import { Link } from "react-router-dom";
import api from "../service/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Cursos(){
    const [curso, setCurso] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [nombreCurso, setNombreCurso] = useState("");
    const { rol } = useContext(AuthContext);
    const cargarCursos = (paginaActual, nombre) => {
        api.get(`/curso?page=${paginaActual}&size=10&nombre=${nombre}`)
            .then((res) => {
                setCurso(res.data.content);
                setPagina(res.data.number);
                setTotalPaginas(res.data.totalPages);
            })
            .catch((e) => console.log(e));
    };

    const cargarCursosPorNombre = (e, nombre) => {
        e.preventDefault();

        cargarCursos(0, nombre);
    };

    useEffect(()=>{cargarCursos(0, nombreCurso);},[nombreCurso]);
    
    const paginaSiguiente = () => {
        cargarCursos(pagina + 1, nombreCurso);
    };

    const paginaAnterior = () => {
        cargarCursos(pagina - 1, nombreCurso);
    };

    return (
        <main className="contenido">
            {rol == "ROLE_ADMIN" && <Link to="/cursos/nuevo">Crear Curso</Link>}
            <h1>
                Cursos
            </h1>
            <h2>Total de cursos: {curso.length}</h2>

            <form onSubmit={(e) => cargarCursosPorNombre(e, nombreCurso)}>
                <label>Buscar: </label>
                <input type="text" value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)}/>
                <button>Buscar</button>
            </form>
            {
                curso.map((curso) => {
                    return <CursoCard name={curso.nombre} desc={curso.descripcion} activo={curso.activo} id={curso.id} key={curso.id} fechacreacion={curso.fechacreacion} mostrarBotonDescripcion={true}/>
                })
            }

            <button onClick={() => paginaAnterior()} disabled={pagina === 0}>Anterior</button>
            <button onClick={() => paginaSiguiente()} disabled={pagina + 1 >= totalPaginas}>Siguiente</button>
            pagina {pagina + 1} de {totalPaginas}
        </main>
    );
}

export default Cursos;