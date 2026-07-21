import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import api from "../service/api";

function UsuarioFila({usuarios, setMostrarFormulario, setSeleccionarUsuario, cargarUsuarios}){
    const { rol } = useContext(AuthContext);
    const eliminar = ((e) => api.delete(`usuario/${usuarios.id}`).then((res) => {
        console.log("Usuario eliminado"); cargarUsuarios();
    }).catch((e) => console.log(e.data)));
    return (<tr>
        <td>{usuarios.nombre}</td>
        <td>{usuarios.correo}</td>
        <td>{usuarios.edad}</td>
        <td>{usuarios.rol.nombre}</td>
        <td>
            {rol == "ROLE_ADMIN" && <> <button onClick={() => {setSeleccionarUsuario(usuarios); setMostrarFormulario(true)}}>Editar</button> <button onClick={() => eliminar()}>Eliminar</button></>}
        </td>
    </tr>
    );
}

export default UsuarioFila;