import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <aside className="sidebar">
            <h3>Menú</h3>
            <Link to="/">Inicio</Link>

            {" | "}

            <Link to="/cursos">Cursos</Link>

            {" | "}

            <Link to="/usuarios">Usuarios</Link>

            {" | "}

            <Link to="/login">Login</Link>
        </aside>
    );
}

export default Sidebar;