import axios from "axios";

const AUTH_URL = "/api/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${AUTH_URL}/login`, { username, password });
  
  if (response.data.token) {
    localStorage.setItem("jwt_token", response.data.token);
  }
  
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("jwt_token");
};

// --- ADD THIS NEW FUNCTION HERE ---
export const register = async (username, password) => {
  // Sends a POST request to the backend's registration endpoint
  const response = await axios.post(`${AUTH_URL}/register`, { username, password });
  
  // No token is stored on registration, typically just returns success message
  return response.data;
};