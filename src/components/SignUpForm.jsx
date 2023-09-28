import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contexts/CartContexts";
import { Link } from 'react-router-dom';
export default function SignInForm({ setToken }) {
  const { loginFunction, login } = useContext(CartContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 8) { 
      setError("Username should be 8 characters or more");
      return;
    }
    try {
      const response = await fetch("https://fakestore.api.com/auth/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const result = await response.json();
      loginFunction(result.token);
      navigate('/products');
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2 className="signin">Sign In</h2>
      {error && <p>{error}</p>}
      <form className="Form" onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" >Submit<Link to="/"/></button> {/* Added type="submit" to the button */}
      </form>
    </>
  );
}
