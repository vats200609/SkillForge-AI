import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div
            style={{
                padding: "40px",
                textAlign: "center",
            }}
        >
            <h1>🎉 Welcome to SkillForge AI</h1>

            <p>You are successfully logged in.</p>

            <div
                style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                <button
                    onClick={() => navigate("/profile")}
                    style={{
                        padding: "12px 20px",
                        cursor: "pointer",
                    }}
                >
                    My Profile
                </button>

                <button
                    onClick={logout}
                    style={{
                        padding: "12px 20px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard;