import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
          navigate("/");
        } else {
          setError("Invalid credentials");
        }
    }
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                /><br />
                <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Login</button>
            </form>
            </div>
    )
}

export default Login;