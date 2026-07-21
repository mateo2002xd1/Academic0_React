import { useEffect, useState } from "react";
import api from "../service/api";
import TablaUsuarios from "../components/TablaUsuarios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import FormularioUsuario from "../components/FormularioUsuario";

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const { rol } = useContext(AuthContext);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [seleccionarUsuario, setSeleccionarUsuario] = useState(null);

    const nuevoUsuario = () => {
        setSeleccionarUsuario(null);
        setMostrarFormulario(true);
    }

    const cargarUsuarios = () => {
        api.get("/usuario")
            .then((res) => setUsuarios(res.data))
            .catch((e) => console.log(e));
    }

    useEffect(() => {
        cargarUsuarios();
    }, [])
    
    return (
        <main className="contenido">
            <h1>Usuarios</h1>
            {rol == "ROLE_ADMIN" && <button onClick={nuevoUsuario}>Crear Usuario</button>}
            <TablaUsuarios usuarios={usuarios} setMostrarFormulario={setMostrarFormulario} setSeleccionarUsuario={setSeleccionarUsuario} cargarUsuarios={cargarUsuarios}/>
            {
                mostrarFormulario &&
                <FormularioUsuario usuario={seleccionarUsuario} cargarUsuarios={cargarUsuarios}/>
            }
        </main>
    );
}

export default Usuarios;