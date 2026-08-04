import api from "../api/api";

// Login User
export const loginUser = async (email, password) => {
    const response = await api.post("/auth/login", {
        email,
        password,
    });

    return response.data;
};

// Signup User
export const signupUser = async (userData) => {
    const response = await api.post("/auth/signup", userData);

    return response.data;
};