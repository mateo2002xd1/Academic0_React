import { Link } from "react-router-dom";

function CursoCard(props){
    return  (<div className="card" key={props.id}>
        <h3>
            {props.name}
        </h3>

            <div className="info">
                <span className="fecha">
                    Fecha Creación: {props.fechacreacion}
                </span>

                <span className="activo">
                    Activo: {props.activo ? "Sí" : "No"}
                </span>
            </div>

        <p>
            {props.desc}
        </p>
        
        {props.mostrarBotonDescripcion && (
            <Link to={`/cursos/${props.id}`}>
                Ver detalle
            </Link>
        )}

        {props.mostrarEditarCurso && (
            <Link to={`/cursos/editar/${props.id}`}>
                Editar curso
            </Link>
        )}
    </div>);
}

export default CursoCard;