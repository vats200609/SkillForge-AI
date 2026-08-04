import { useState } from "react";
import { signupUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signupUser({
                name,
                email,
                password,
            });

            alert("Signup Successful ✅");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.detail || "Signup Failed"
            );
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
                onSubmit={handleSignup}
                style={{
                    width: "350px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Create Account</h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ padding: "10px" }}
                />

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
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;