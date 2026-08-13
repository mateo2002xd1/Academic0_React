import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar(){
    const { rol } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const { setToken } = useContext(AuthContext);
    const { setRefreshToken } = useContext(AuthContext);
    const { setRol } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("rol");

        setToken(null);
        setRefreshToken(null);
        setRol(null);
    }

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

            {rol === "ROLE_USER" && (
                <>
                    <Link to="/inscripciones">Mis inscripciones</Link>
                    {" | "}
                </>
            )}

            <Link
                to="#"
                onClick={(e) => {
                    e.preventDefault();
                    logout();
                }}
            >
                Cerrar sesión
            </Link>
        </aside>
    );
}

export default Sidebar;