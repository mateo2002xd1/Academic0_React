import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [correo, setCorreo] = useState(""); 
    const [password, setPassword] = useState("");
    const navegar = useNavigate();
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    };

    const login = (e) => {
        e.preventDefault();

        const usuario = {
            correo,
            password
        }

        axios.post(`http://localhost:8080/auth/login`, usuario).then((res) => 
            {
                localStorage.setItem("accessToken", res.data.token);
                localStorage.setItem("refreshToken", res.data.refreshToken);
            }).catch((e) => alert("Correo o contraseña incorrectos"));
            
    } 
    
    
    return (
        <main className="contenido">
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Correo</label>
                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <label>Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Ingresar</button>
            </form>
        </main>
    );
}

export default Login;