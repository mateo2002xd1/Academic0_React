import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../service/api";

function FormularioUsuario({usuario, cargarUsuarios}){
    const [id, setId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [rolId, setRolId] = useState("");
    const roles = [
        { id: 1, nombre: "ADMIN" },
        { id: 2, nombre: "USUARIO" }
    ];

    useEffect(() => {
        if(usuario){
            setId(usuario.id);
            setNombre(usuario.nombre);
            setCorreo(usuario.correo);
            setEdad(usuario.edad);
            setRolId(usuario.rol.id);
        }else{
            setId(null);
            setNombre("");
            setCorreo("");
            setEdad("");
            setRolId("");
        }
    }, [usuario]);

    const guardar = ((e) => {
        e.preventDefault();
        const usuario = {
                nombre: nombre,
                correo: correo,
                edad: edad,
                rol: rolId
            };
        if(id){
            api.put(`/usuario/${id}`, usuario).then( (res) => {
                console.log("Usuario editado");
                setId(null);
                setNombre("");
                setCorreo("");
                setEdad("");
                setRolId("");
                cargarUsuarios();
            }).catch((e) => console.log(e));
        }else{
            api.post(`/usuario`, usuario).then( (res) => {
                console.log("Usuario creado");
                setId(null);
                setNombre("");
                setCorreo("");
                setEdad("");
                setRolId("");
                cargarUsuarios();
            }).catch((e) => console.log(e));

        }

    });

    return (
        <>
            {id && <h1>Editar {id}</h1>}
            {!id && <h1>Crear Usuario</h1>}

            <form onSubmit={guardar}>
                <label>Nombre</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label>Correo</label>
                <input
                    type="text"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    readOnly={!!id}
                />

                <label>Edad</label>
                <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

                <label>Rol</label>

                <select
                    value={rolId}
                    onChange={(e) => setRolId(Number(e.target.value))}
                >
                    <option value="">Seleccione un rol</option>

                    {roles.map((rol) => (
                        <option key={rol.id} value={rol.id}>
                            {rol.nombre}
                        </option>
                    ))}
                </select>

                <button>Guardar</button>
            </form>
        </>
    );
}

export default FormularioUsuario;