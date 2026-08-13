import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Navbar(){
    
    return (
        <nav>
            <h2 className="navbar text-3xl font-bold">
                Sistema de Cursos
            </h2>
        </nav>
    );
}

export default Navbar;