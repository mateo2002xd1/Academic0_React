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

        
    </div>);
}

export default CursoCard;