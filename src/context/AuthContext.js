import { useContext, createContext , useState } from "react";

const AuthContext  = createContext();

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const login = (email,password) => {
        if (email === "admin@example.com" && password === "password") {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }

    const logout = () =>  setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}