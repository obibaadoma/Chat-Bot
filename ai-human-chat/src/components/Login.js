import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        // Check if the current URL contains the access token from the OAuth provider
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
          // Store token in local storage or session storage
          localStorage.setItem('accessToken', token);
          // Redirect to the home page or authenticated content
          navigate('/');
        }
      } catch (error) {
        console.error('Redirect error:', error);
        // Handle error
      }
    };

    handleRedirect();
  }, [navigate]);

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      // Make a GET request to your backend route for Google authentication
      const response = await axios.get('http://localhost:5000/auth/google'); // Replace with your actual backend route
      console.log(response.data); // Handle the response data as needed

      // Redirect to the home page after successful login
      navigate('/'); // Replace '/' with the appropriate route
    } catch (error) {
      console.error('Google login error:', error);
      // Handle error
    }
  };

  // Function to handle GitHub login
  const handleGitHubLogin = async () => {
    try {
      // Make a GET request to your backend route for GitHub authentication
      const response = await axios.get('http://localhost:5000/auth/github'); // Replace with your actual backend route
      console.log(response.data); // Handle the response data as needed

      // Redirect to the home page after successful login
      navigate('/'); // Replace '/' with the appropriate route
    } catch (error) {
      console.error('GitHub login error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Button to trigger Google login */}
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {/* Button to trigger GitHub login */}
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
};

export default Login;
