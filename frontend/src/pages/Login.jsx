import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(email, password);

            console.log(data);

            // JWT Token Save
            localStorage.setItem("token", data.access_token);

            alert("Login Successful");

            // Dashboard par redirect
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            alert("Login Failed");
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    width: "350px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <h1 style={{ textAlign: "center" }}>SkillForge AI</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: "10px" }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: "10px" }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;