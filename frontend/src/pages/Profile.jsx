import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/");
                    return;
                }

                const response = await api.get("/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.error(error);
                alert("Session Expired. Please Login Again.");

                localStorage.removeItem("token");
                navigate("/");
            }
        };

        fetchProfile();
    }, [navigate]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div
                style={{
                    width: "400px",
                    padding: "30px",
                    border: "1px solid gray",
                    borderRadius: "10px",
                }}
            >
                <h1>👤 My Profile</h1>

                <hr />

                <h3>Name</h3>
                <p>{user.name}</p>

                <h3>Email</h3>
                <p>{user.email}</p>

                <button
                    onClick={() => navigate("/dashboard")}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        cursor: "pointer",
                    }}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

export default Profile;