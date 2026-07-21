import UsuarioFila from "./UsuarioFila";

function TablaUsuarios({usuarios, setMostrarFormulario, setSeleccionarUsuario, cargarUsuarios }){
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((user) => (
                    <UsuarioFila key={user.id} usuarios={user} setMostrarFormulario={setMostrarFormulario} setSeleccionarUsuario={setSeleccionarUsuario} cargarUsuarios={cargarUsuarios}/>
                ))}
            </tbody>
        </table>
    );
}

export default TablaUsuarios;