import { useState } from "react";
import api from "../api/api";

function ResumeUpload() {
    const [file, setFile] = useState(null);

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

            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert("Upload Failed");
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
            <div style={{ textAlign: "center" }}>
                <h1>📄 Resume Upload</h1>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <br />
                <br />

                <button onClick={handleUpload}>
                    Upload Resume
                </button>
            </div>
        </div>
    );
}

export default ResumeUpload;