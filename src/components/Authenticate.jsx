import React, { useState, useEffect } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/auth/login",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json", // Fix the syntax of the 'Content-Type' header
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
        const usernameFromData = result.data.username;
        setUsername(usernameFromData);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData(); // Call the fetchData function inside useEffect
  }, [token]); // Add 'token' as a dependency to useEffect

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {username && <p>Username: {username}</p>} {/* Display the username */}
    </div>
  );
}
