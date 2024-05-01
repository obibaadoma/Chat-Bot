// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend server URL

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/register`, {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

// Define other API request functions here
