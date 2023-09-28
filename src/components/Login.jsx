import React, { useState } from "react";
import SignInForm from "./SignInForm";
import Authenticate from "./Authenticate";

function Login() {
  const [token, setToken] = useState(null);
  
  return (
    <>
      <SignInForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default Login;
