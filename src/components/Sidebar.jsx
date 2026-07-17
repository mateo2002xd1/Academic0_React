import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar(){
    const { rol } = useContext(AuthContext);
    return (
        <aside className="sidebar">
            <h3>Menú</h3>
            <Link to="/">Inicio</Link>

            {" | "}

            <Link to="/cursos">Cursos</Link>

            {" | "}

            {rol === "ROLE_ADMIN" && (
                <>
                    <Link to="/usuarios">Usuarios</Link>
                    {" | "}
                </>
            )}

            <Link to="/login">Login</Link>
        </aside>
    );
}

export default Sidebar;