import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }){
    const [token, setToken] = useState(
        localStorage.getItem("accessToken")
    );

    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem("refreshToken")
    );

    const [rol, setRol] = useState(
            localStorage.getItem("rol")
        );

    return(
        <AuthContext.Provider
            value={{
                token,
                setToken,
                refreshToken,
                setRefreshToken,
                rol,
                setRol
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;