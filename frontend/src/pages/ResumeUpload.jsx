import { useState } from "react";
import ReactMarkdown from "react-markdown";
import api from "../api/api";

function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState("");

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const token = localStorage.getItem("token");

            const response = await api.post(
                "/resume/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setAnalysis(response.data.analysis);
            alert("Resume analyzed successfully!");

        } catch (error) {
            console.error("Upload Error:", error);

            if (error.response) {
                alert(
                    error.response.data.detail ||
                    JSON.stringify(error.response.data)
                );
            } else {
                alert(error.message);
            }
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                padding: "30px",
                backgroundColor: "#121212",
                color: "white",
            }}
        >
            <h1>📄 Resume Upload</h1>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br />

            <button
                onClick={handleUpload}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    border: "none",
                }}
            >
                Upload Resume
            </button>

            {analysis && (
                <div
                    style={{
                        marginTop: "30px",
                        width: "90%",
                        maxWidth: "900px",
                        padding: "25px",
                        borderRadius: "12px",
                        backgroundColor: "#ffffff",
                        color: "#222",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        textAlign: "left",
                        lineHeight: "1.8",
                    }}
                >
                    <h2 style={{ color: "#111" }}>
                        🤖 AI Resume Analysis
                    </h2>

                    <ReactMarkdown>
                        {analysis}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
}

export default ResumeUpload;